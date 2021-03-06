enum Attributes {
  title = 'title',
  checked = 'checked'
}
export class MaterialCheckboxElement extends HTMLElement {
  checkbox: HTMLInputElement;
  get title(): string {
    return this.getAttribute(Attributes.title);
  }
  set title(title: string) {
    this.setAttribute(Attributes.title, title);
  }

  get checked(): boolean {
    return this.getAttribute(Attributes.checked) === 'true';
  }
  set checked(checked: boolean) {
    this.setAttribute(Attributes.checked, checked.toString());
  }

  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.innerHTML = `
    <style>
    .pure-material-checkbox {
      z-index: 0;
      position: relative;
      display: inline-block;
      color: rgba(var(--pure-material-onsurface-rgb, f, f, f), 0.87);
      font-family: var(
        --pure-material-font,
        'Roboto',
        'Segoe UI',
        BlinkMacSystemFont,
        system-ui,
        -apple-system
      );
      font-size: 16px;
      line-height: 1.5;
    }

    .pure-material-checkbox > input {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      z-index: -1;
      position: absolute;
      left: -10px;
      top: -8px;
      display: block;
      margin: 0;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: rgba(var(--pure-material-onsurface-rgb, f, f, f), 0.6);
      box-shadow: none;
      outline: none;
      opacity: 0;
      transform: scale(1);
      pointer-events: none;
      transition: opacity 0.3s, transform 0.2s;
    }

    .pure-material-checkbox > span {
      display: inline-block;
      width: 100%;
      cursor: pointer;
    }

    .pure-material-checkbox > span::before {
      content: '';
      display: inline-block;
      box-sizing: border-box;
      margin: 3px 11px 3px 1px;
      border: solid 2px; /* Safari */
      border-color: rgba(var(--pure-material-onsurface-rgb, f, f, f), 0.6);
      border-radius: 2px;
      width: 18px;
      height: 18px;
      vertical-align: top;
      transition: border-color 0.2s, background-color 0.2s;
    }

    .pure-material-checkbox > span::after {
      content: '';
      display: block;
      position: absolute;
      top: 3px;
      left: 1px;
      width: 10px;
      height: 5px;
      border: solid 2px transparent;
      border-right: none;
      border-top: none;
      transform: translate(3px, 4px) rotate(-45deg);
    }

    .pure-material-checkbox > input:checked,
    .pure-material-checkbox > input:indeterminate {
      background-color: var(--pure-material-primary-rgb);
    }

    .pure-material-checkbox > input:checked + span::before,
    .pure-material-checkbox > input:indeterminate + span::before {
      border-color: var(--pure-material-primary-rgb);
      background-color: var(--pure-material-primary-rgb);
    }

    .pure-material-checkbox > input:checked + span::after,
    .pure-material-checkbox > input:indeterminate + span::after {
      border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    }

    .pure-material-checkbox > input:indeterminate + span::after {
      border-left: none;
      transform: translate(4px, 3px);
    }

    /* Hover, Focus */
    .pure-material-checkbox:hover > input {
      opacity: 0.04;
    }

    .pure-material-checkbox > input:focus {
      opacity: 0.12;
    }

    .pure-material-checkbox:hover > input:focus {
      opacity: 0.16;
    }

    .pure-material-checkbox > input:active {
      opacity: 1;
      transform: scale(0);
      transition: transform 0s, opacity 0s;
    }

    .pure-material-checkbox > input:active + span::before {
      border-color: var(--pure-material-primary-rgb);
    }

    .pure-material-checkbox > input:checked:active + span::before {
      border-color: transparent;
      background-color: rgba(var(--pure-material-onsurface-rgb, f, f, f), 0.6);
    }

    .pure-material-checkbox > input:disabled {
      opacity: 0;
    }

    .pure-material-checkbox > input:disabled + span {
      color: rgba(var(--pure-material-onsurface-rgb, f, f, f), 0.38);
      cursor: initial;
    }

    .pure-material-checkbox > input:disabled + span::before {
      border-color: currentColor;
    }

    .pure-material-checkbox > input:checked:disabled + span::before,
    .pure-material-checkbox > input:indeterminate:disabled + span::before {
      border-color: transparent;
      background-color: currentColor;
    }
  </style>
  <label class="pure-material-checkbox">
    <input type="checkbox" ${this.checked ? 'checked' : ''}
    />
    <span class="task__title">${this.title}</span>
  </label>
  `;
    this.checkbox = this.querySelector('input');
    this.checkbox.addEventListener('change', event => {
      this.dispatchEvent(new CustomEvent('checkChange', event));
    });
  }
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [Attributes.title, Attributes.checked];
  }

  attributeChangedCallback(name, oldValue, newValue): void {
    //ToDo improve
    this.render();
  }
}

customElements.define('material-checkbox', MaterialCheckboxElement);
