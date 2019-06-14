export class EisenhowerMatrixHeader extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = '<h1>The Eisenhower Matrix</h1>';
  }
}

customElements.define('eisenhower-matrix-header', EisenhowerMatrixHeader);
