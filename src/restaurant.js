function createRestaurant(restaurantName) {
  var restaurantObject = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurantObject;
};


function addMenuItem(restaurantName, itemOnMenu) {
  isItemPresent = false;
  for (var i = 0; i < restaurantName.menus.breakfast.length; i++) {
    if(restaurantName.menus.breakfast[i] === itemOnMenu) {
      isItemPresent = true;
    };
  };
  for (var i = 0; i < restaurantName.menus.lunch.length; i++) {
    if(restaurantName.menus.lunch[i] === itemOnMenu) {
      isItemPresent = true;
    };
  };
  for (var i = 0; i < restaurantName.menus.dinner.length; i++) {
    if(restaurantName.menus.dinner[i] === itemOnMenu) {
      isItemPresent = true;
    };
  };
  if (itemOnMenu.type === 'breakfast' && isItemPresent === false) {
    restaurantName.menus.breakfast.push(itemOnMenu)
  } else if (itemOnMenu.type === 'lunch' && isItemPresent === false) {
    restaurantName.menus.lunch.push(itemOnMenu);
  } else if (itemOnMenu.type === 'dinner' && isItemPresent === false) {
    restaurantName.menus.dinner.push(itemOnMenu)
  }
  return restaurantName;
};


function removeMenuItem(restaurantName, itemForRemoval, nameOfMenu) {
  if(restaurantName.menus.breakfast.includes(itemForRemoval) === true || nameOfMenu === 'breakfast') {
      restaurantName.menus.breakfast.splice(0, 1);
      return `No one is eating our ${itemForRemoval} - it has been removed from the ${nameOfMenu} menu!`;
  } else if(restaurantName.menus.lunch.includes(itemForRemoval) === true) {
      restaurantName.menus.lunch.splice(0, 1);
      return `No one is eating our ${itemForRemoval} - it has been removed from the ${nameOfMenu} menu!`;
  } else if(restaurantName.menus.dinner.includes(itemForRemoval) === true || nameOfMenu === 'dinner') {
      restaurantName.menus.dinner.splice(0, 1);
      return `No one is eating our ${itemForRemoval} - it has been removed from the ${nameOfMenu} menu!`;
  } else if(restaurantName.menus.lunch.includes(itemForRemoval === false) || nameOfMenu === 'lunch'){
      return `Sorry, we don't sell ${itemForRemoval}, try adding a new recipe!`;
  };
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
