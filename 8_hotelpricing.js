function getRoomPrice(roomType) {
    const room = roomType.toLowerCase();
    
    switch(room) {
      case "single":
        return "$50 per night";
      case "double":
        return "$80 per night";
      case "suite":
        return "$150 per night";
      case "deluxe":
        return "$200 per night";
      default:
        return "Invalid room type. Please select from: single, double, suite, or deluxe.";
    }
  }
  
  const requestedRoomType = "suite";
  
  const roomPriceMessage = getRoomPrice(requestedRoomType);
  console.log(roomPriceMessage);
  
  console.log(getRoomPrice("single"));
  console.log(getRoomPrice("Double"));
  console.log(getRoomPrice("SUITE"));
  console.log(getRoomPrice("deluxe"));
  console.log(getRoomPrice("king"));