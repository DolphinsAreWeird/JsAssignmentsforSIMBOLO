function checkProductAvailability(availableStock, requestedQuantity) {
    switch(true) {
      case (requestedQuantity <= availableStock):
        return `Your order for ${requestedQuantity} units has been added to cart. (${availableStock - requestedQuantity} units remaining)`;
      case (availableStock > 0):
        return `Sorry, we only have ${availableStock} units in stock. Please adjust your quantity.`;
      default:
        return "Sorry, this product is currently out of stock.";
    }
  }
  
  const stockAvailable = 10;
  const quantityWanted = 3;
  
  const availabilityMessage = checkProductAvailability(stockAvailable, quantityWanted);
  console.log(availabilityMessage);
  
  console.log(checkProductAvailability(10, 5));
  console.log(checkProductAvailability(10, 10));
  console.log(checkProductAvailability(10, 15));
  console.log(checkProductAvailability(0, 2));