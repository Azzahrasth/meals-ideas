class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12 mx-auto">
            <div class="input-group my-4">
              <input type="text" class="form-control" id="searchElement" placeholder="Search Your Meal">
              <button class="btn btn-primary" type="button" id="searchButtonElement">Search</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }

  renderError(message) {
    this.innerHTML = `
      <div class="container">
        <h2 class="text-muted">${message}</h2>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
