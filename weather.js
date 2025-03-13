function getWeatherRecommendation(weatherCondition) {
    const weather = weatherCondition.toLowerCase();
    
    switch(weather) {
      case "sunny":
        return "Wear sunglasses and light clothes.";
      case "rainy":
        return "Take an umbrella and wear a raincoat.";
      case "cold":
        return "Wear a jacket and warm clothes.";
      case "snowy":
        return "Wear heavy winter clothing and boots.";
      case "windy":
        return "Wear a windbreaker.";
      default:
        return "Unknown weather condition. Check the forecast for appropriate clothing.";
    }
  }
  
  const currentWeather = "rainy";
  
  const clothingRecommendation = getWeatherRecommendation(currentWeather);
  console.log(clothingRecommendation);
  
  console.log(getWeatherRecommendation("sunny"));
  console.log(getWeatherRecommendation("Rainy"));
  console.log(getWeatherRecommendation("COLD"));
  console.log(getWeatherRecommendation("snowy"));
  console.log(getWeatherRecommendation("windy"));
  console.log(getWeatherRecommendation("cloudy"));