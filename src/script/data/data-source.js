class DataSource {
  static async searchMeal(keyword) {
    try {
      const response = await $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
        method: 'GET',
        dataType: 'json',
      });

      if (response.meals) {
        return Promise.resolve(response.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async specialMenu() {
    try {
      const response = await $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/random.php',
        method: 'GET',
        dataType: 'json',
      });

      if (response.meals) {
        return Promise.resolve(response.meals);
      } else {
        return Promise.reject(`menu is not found`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default DataSource;
