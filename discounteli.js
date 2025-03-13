function checkDiscountEligibility(age, isMember) {
    // Using if/else here since we need to check ranges and boolean values
    // Switch isn't ideal for this particular case
    if (age >= 60) {
      return "Customer is eligible for a 20% senior discount.";
    } else if (isMember) {
      return "Customer is eligible for a 10% member discount.";
    } else {
      return "Customer is not eligible for any discount.";
    }
  }
  
  // Example usage
  console.log(checkDiscountEligibility(65, false)); // Senior discount
  console.log(checkDiscountEligibility(45, true));  // Member discount