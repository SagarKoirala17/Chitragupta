export function generateRandomDate(startYear, endYear) {
    var startDate = new Date(startYear, 0, 1);
    var endDate = new Date(endYear, 11, 31);
    
    var startTimestamp = startDate.getTime();
    var endTimestamp = endDate.getTime();
    
    var randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
    var randomDate = new Date(randomTimestamp);
    
    return randomDate.toISOString().split('T')[0];
  }
  

    