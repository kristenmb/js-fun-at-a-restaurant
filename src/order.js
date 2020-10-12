function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
    };
  };


function refundOrder(refundRequest, deliveryOrders) {
    deliveryOrders.splice((refundRequest - 1), 1);
    return deliveryOrders;
};


function listItems(deliveryOrders) {
  var itemName = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
   var itemNameList = `${deliveryOrders[i].item}`;
   if(i < deliveryOrders.length - 1) {
     itemNameList += ', '
   }
  itemName += itemNameList
 };
 return itemName;
};


function searchOrder(deliveryOrders, itemInput) {
  var isPresent = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemInput) {
      isPresent = true;
    };
  };
  return isPresent;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
