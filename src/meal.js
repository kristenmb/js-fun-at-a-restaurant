function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(item1, ingredients) {
  if (ingredients.includes(item1) === false) {
    ingredients.push(item1);
  }
  return ingredients;
};


function formatPrice(price) {
  return "$" + price;
};

function decreasePrice(originalPrice) {
  return originalPrice - (originalPrice / 10);
}

function createRecipe(name, ingredients, type) {
  return recipe = {
    title: name,
    ingredients: ingredients,
    type: type,
  };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
