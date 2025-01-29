class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button class="btn">${this.getAttribute(
      "text"
    )}</button>`;
  }
}

customElements.define("my-button", MyButton);

// usage
// <my-button text="Click Me"></my-button>
