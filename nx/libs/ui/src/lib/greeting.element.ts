export class GreetingElement extends HTMLElement {
    public static observedAttributes = ['title'];

    attributeChangedCallback(): void {
      this.innerHTML = `<h1>Welcome to ${this.title}!!!</h1>`;
    }
  }

  customElements.define('nx-greeting', GreetingElement);
