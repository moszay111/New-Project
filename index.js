const a = "Akpowu Moses";
console.log(moses);
console.log(zay);

// Define the number of customers and their usage time for each hour
const customersPerHour = [
  2, 3, 1, 0, 0, 1, 3, 6, 10, 13, 14, 17, 19, 21, 22, 23, 23, 22, 20, 18, 15,
  10, 6, 4,
];

// Define the number of seats in the cafe
const seats = 20;

// Define the start time
const startTime = new Date(2023, 1, 2, 12, 0, 0, 0);

// Define the end time
const endTime = new Date(2023, 1, 2, 12, 0, 0, 0);
endTime.setDate(endTime.getDate() + 1);

// Define the current time
let currentTime = new Date(startTime.getTime());

// Define the customer ID
let customerID = 1;

// Simulate the cafe
while (currentTime < endTime) {
  // Get the current hour
  const currentHour = currentTime.getHours();

  // Get the number of customers for the current hour
  const numCustomers = customers[currentHour];

  // Check if there are enough seats for the customers
  if (numCustomers > seats) {
    console.log(
      `Not enough seats for ${numCustomers} customers at ${currentTime}`
    );
    currentTime.setHours(currentTime.getHours() + 1);
    continue;
  }

  //Serve each customer one by one
  for (let i = 0; i < numCustomers; i++) {
    // Generate a random usage time between 10 and 60 minutes
    const usageTime = Math.floor(Math.random() * 51) + 10;

    // Print the customer's information
    console.log(
      `Customer ${customerID} enters at ${currentTime.toLocaleDateString()}, they are going to use Cafe for ${usageTime} minutes from now on. `
    );

    // Update the current time
    const leaveTime = new Date(currentTime.getTime() + usageTime * 6000);
    console.log(
      `Customer ${customerID} leaves at ${leaveTime.toLocaleString()}, they have used Cafe for ${usageTime}, minutes`
    );

    // Increment the current time
    customerID++;
  }

  currentTime.setHours(currentTime.getHours() + 1);
}
//
