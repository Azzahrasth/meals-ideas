class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <div class="container d-flex justify-content-center">
          <h2 class="text-white">MEALS IDEAS</h2>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
