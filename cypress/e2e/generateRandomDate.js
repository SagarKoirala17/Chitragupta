export function generateRandomDateAfterToday(){
    // Get today's date
     const today = new Date();

    // Generate a random number of days between 1 and 30
      const randomNumberOfDays = Math.floor(Math.random() * 30) + 1;

    // Add the random number of days to today's date
      today.setDate(today.getDate() + randomNumberOfDays);

    // Get the month, day, and year components from the generated date
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(today.getDate()).padStart(2, '0');
      const year = today.getFullYear();

    // Construct the random date string in the format YYYY-MM-DD
      const randomDate = `${year}-${month}-${day}`;

      return randomDate
}