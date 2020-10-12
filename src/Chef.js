class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, time) {
    if(time === true) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`;
    };


  checkForFood(foodItem) {
    if(this.restaurant.menus.breakfast.includes(foodItem) === true) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else if(this.restaurant.menus.lunch.includes(foodItem) === true) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else if(this.restaurant.menus.dinner.includes(foodItem) === true) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }
  };
};

module.exports = Chef;
