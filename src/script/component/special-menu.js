class SpecialMenu extends HTMLElement {

  constructor() {
    super();
  }

  set meal(meal) {
    this._meal = meal[0];
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container my-5">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center mb-4 ">Today's Specials</h3>
            <div class="row">
              <div class="col-md-6">
                <img class="img-fluid rounded" src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
              </div>
              <div class="col-md-6">
                <h3 class="display-5 text-info">${this._meal.strMeal}</h3>
                <p class="lead">Country: ${this._meal.strArea}</p>
                <a href="${this._meal.strYoutube}" target="_blank" class="btn btn-info">Watch Tutorial</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('special-menu', SpecialMenu);
