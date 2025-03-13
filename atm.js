function getATMActionMessage(option) {
    const transactionType = option.toLowerCase();
    
    switch(transactionType) {
      case "withdraw":
        return "Please enter the amount to withdraw";
      case "deposit":
        return "Please insert cash or check";
      case "balance":
        return "Your balance is being retrieved";
      default:
        return "Invalid Option";
    }
  }
  
  const selectedOption = "withdraw";
  
  const actionMessage = getATMActionMessage(selectedOption);
  console.log(actionMessage);
  
  console.log(getATMActionMessage("withdraw"));
  console.log(getATMActionMessage("DEPOSIT"));
  console.log(getATMActionMessage("Balance"));
  console.log(getATMActionMessage("transfer"));