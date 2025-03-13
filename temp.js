function checkTemperature(minOptimalTemp, maxOptimalTemp, currentTemp) {
    switch(true) {
      case (currentTemp < minOptimalTemp):
        const lowDifference = minOptimalTemp - currentTemp;
        return `ALERT: Temperature is too low! Current: ${currentTemp}°C (${lowDifference}°C below minimum)`;
      case (currentTemp > maxOptimalTemp):
        const highDifference = currentTemp - maxOptimalTemp;
        return `ALERT: Temperature is too high! Current: ${currentTemp}°C (${highDifference}°C above maximum)`;
      default:
        return `Temperature is optimal. Current: ${currentTemp}°C`;
    }
  }
  
  const minTemp = 18;
  const maxTemp = 25;
  const currentTemp = 28;
  
  const tempAlertMessage = checkTemperature(minTemp, maxTemp, currentTemp);
  console.log(tempAlertMessage);
  
  console.log(checkTemperature(18, 25, 22));
  console.log(checkTemperature(18, 25, 16));
  console.log(checkTemperature(18, 25, 27));