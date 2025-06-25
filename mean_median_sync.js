var readlineSync = require("readline-sync");

var numbers = [];

while (true) {
  var input = readlineSync.question("Enter a number (or 'q' to quit): ");

  if (input.toLowerCase() === "q") {
    break;
  }

  var num = parseInt(input);
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    console.log("Invalid input. Please enter a number.");
  }
}

if (numbers.length === 0) {
  console.log("No numbers entered.");
} else {
  
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  var mean = total / numbers.length;

  
  numbers.sort(function (a, b) {
    return a - b;
  });

  var median;
  var mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    median = (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
    median = numbers[mid];
  }

  console.log("\nNumbers: " + numbers.join(", "));
  console.log("Mean: " + mean);
  console.log("Median: " + median);
}
