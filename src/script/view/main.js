import '../component/meal-list.js';
import '../component/search-bar.js';
import '../component/special-menu.js';
import DataSource from '../data/data-source.js';

const main = () => {

  const render = async () => {
    try {
      const special = await DataSource.specialMenu();
      renderSpecialMenu(special);
      const result = await DataSource.searchMeal('');
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const specialMenu = document.querySelector('special-menu');
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.innerHTML = '';
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };
  const renderSpecialMenu = special => {
    specialMenu.meal = special;
  };

  const fallbackSpecialMenu = message => {
    specialMenu.renderError(message);
  };

  render();
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;