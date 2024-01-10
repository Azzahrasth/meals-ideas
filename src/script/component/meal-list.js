class MealList extends HTMLElement {
  constructor() {
    super();
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("container");

    let row = document.createElement("div");
    row.classList.add("row");

    this._meals.forEach((meal) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "mb-3");

      col.innerHTML = `
         <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="Fan Art">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">Country: ${meal.strArea}</p>
              <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary btn-sm">Watch Tutorial</a>
            </div>
          </div>
      `;

      row.appendChild(col);
    });

    container.appendChild(row);
    this.appendChild(container);
  }

  renderError(message) {
    this.innerHTML = `
      <div class="container">
        <h2 class="text-muted">${message}</h2>
      </div>
    `;
  }
}

customElements.define("meal-list", MealList);
