function checkVotingEligibility(age, isCitizen) {
    const MIN_VOTING_AGE = 18;
    const isOldEnough = age >= MIN_VOTING_AGE;
    
    switch(true) {
      case (isOldEnough && isCitizen):
        return "You are eligible to vote!";
      case (!isOldEnough && isCitizen):
        return "Sorry, you are not old enough to vote. You must be at least 18 years old.";
      case (isOldEnough && !isCitizen):
        return "Sorry, you must be a citizen to vote.";
      default:
        return "Sorry, you must be at least 18 years old and a citizen to vote.";
    }
  }
  
  const personAge = 19;
  const personIsCitizen = true;
  
  const votingMessage = checkVotingEligibility(personAge, personIsCitizen);
  console.log(votingMessage);
  
  console.log(checkVotingEligibility(21, true));
  console.log(checkVotingEligibility(17, true));
  console.log(checkVotingEligibility(25, false));
  console.log(checkVotingEligibility(16, false));