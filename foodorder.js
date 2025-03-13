function getFoodItem(itemCode) {
    switch(itemCode) {
      case 1:
        return "burger";
      case 2:
        return "pizza";
      case 3:
        return "pasta";
      case 4:
        return "salad";
      default:
        return "invalid food item";
    }
  }
  
  function processOrder(itemCode) {
    const foodItem = getFoodItem(itemCode);
    
    switch(foodItem) {
      case "invalid food item":
        return "Sorry, that menu code is invalid. Please choose a number from 1-4.";
      default:
        return `You have ordered a ${foodItem}. Your order will be ready shortly.`;
    }
  }
  
  const selectedItemCode = 2;
  
  const orderMessage = processOrder(selectedItemCode);
  console.log(orderMessage);
  
  console.log(processOrder(1));
  console.log(processOrder(2));
  console.log(processOrder(3));
  console.log(processOrder(4));
  console.log(processOrder(5));
  console.log(processOrder(0));