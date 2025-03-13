function checkLoanEligibility(creditScore, annualIncome) {
    const MIN_CREDIT_SCORE = 700;
    const MIN_ANNUAL_INCOME = 40000;
    
    const hasSufficientCredit = creditScore >= MIN_CREDIT_SCORE;
    const hasSufficientIncome = annualIncome >= MIN_ANNUAL_INCOME;
    
    switch(true) {
      case (hasSufficientCredit && hasSufficientIncome):
        return "Congratulations! You are eligible for a loan.";
      case hasSufficientCredit:
        return "Sorry, your income does not meet our minimum requirement.";
      case hasSufficientIncome:
        return "Sorry, your credit score does not meet our minimum requirement.";
      default:
        return "Sorry, you do not meet either our credit score or income requirements.";
    }
  }
  
  const customerCreditScore = 720;
  const customerIncome = 45000;
  
  const loanMessage = checkLoanEligibility(customerCreditScore, customerIncome);
  console.log(loanMessage);
  
  console.log(checkLoanEligibility(750, 50000));
  console.log(checkLoanEligibility(650, 45000));
  console.log(checkLoanEligibility(710, 35000));
  console.log(checkLoanEligibility(650, 30000));