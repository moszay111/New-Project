// Define the number of customers for each hour
const customers = [
  4, 5, 7, 10, 12, 15, 18, 20, 22, 24, 25, 23, 20, 19, 17, 16, 14, 13, 11, 10,
  8, 6, 5, 3,
];

// Define the duration of each customer's stay in minutes
const stayDuration = 60;

// Define the number of seats in the cafe
const numSeats = 20;

//Initialize the customer count and the current time
let customerCount = 1;
let currentTimes = new Date(2023, 1, 2, 8, 0, 0);

//Simulate the customers entering and leaving the cafe
for (let i = 0; i < customers.lenght; i++) {
  const hourCustomers = customers[i];

  // Check if there are enough seats for the customers
  if (hourCustomers > numSeats) {
    console.log(`Not enough seats for ${hourCustomers} customers at ${i}:00`);
    continue;
  }

  if (hourCustomers > numSeats) {
    console.log(
      `The remaining ${hourCustomers} over 20 will be moved to another ${stayDuration}`
    );
  }

  // Simulate each customer entering and leaving the cafe
  for (let j = 0; j < hourCustomers; j++) {
    const enterTime = currentTime.toISOString();
    console.log(
      `Customer ${customerCount} enters at ${enterTime}, they are going to use cafe for ${stayDuration} minutes from now on`
    );
    currentTime.setMinutes(currentTime.getMinutes() + stayDuration);
    const leaveTime = currentTime.toISOString();
    console.log(
      `Customer ${customerCount} leaves at ${leaveTime}, they have used cafe for ${stayDuration} minutes`
    );
    customerCount++;
  }
}
