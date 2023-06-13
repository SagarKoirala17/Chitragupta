export function generateRandomDate1998() {
    var startDate = new Date('1998-01-01');
    var endDate = new Date('1998-12-31');
    
    var startTimestamp = startDate.getTime();
    var endTimestamp = endDate.getTime();
    
    var randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
    var randomDate = new Date(randomTimestamp);
    
    return randomDate.toISOString().split('T')[0];
  }
  