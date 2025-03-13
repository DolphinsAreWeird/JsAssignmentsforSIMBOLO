function checkSpeedingViolation(speedLimit, vehicleSpeed) {
    const isSpeeding = vehicleSpeed > speedLimit;
    const speedDifference = vehicleSpeed - speedLimit;
    
    switch(true) {
      case (!isSpeeding):
        return "Vehicle is driving within the speed limit. No ticket required.";
      case (speedDifference <= 5):
        return `Vehicle is driving ${speedDifference} mph over the speed limit. Warning issued.`;
      case (speedDifference <= 15):
        return `Vehicle is driving ${speedDifference} mph over the speed limit. Ticket issued.`;
      default:
        return `Vehicle is driving ${speedDifference} mph over the speed limit. Severe violation ticket issued.`;
    }
  }
  
  const limit = 60;
  const actualSpeed = 75;
  
  const ticketMessage = checkSpeedingViolation(limit, actualSpeed);
  console.log(ticketMessage);
  
  console.log(checkSpeedingViolation(60, 60));
  console.log(checkSpeedingViolation(60, 63));
  console.log(checkSpeedingViolation(60, 70));
  console.log(checkSpeedingViolation(60, 85));