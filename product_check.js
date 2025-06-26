var readlineSync = require("readline-sync");

var numbers = [];

while (true) {
  var input = readlineSync.question("Enter an integer (or 'q' to quit): ");

  if (input.toLowerCase() === "q") {
    break;
  }

  var num = parseInt(input);
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    console.log("Invalid input! Please enter an integer or 'q' to quit.");
  }
}

// Display all numbers entered
console.log("\nNumbers entered: " + numbers.join(", "));

// Check if any two numbers multiply to a third one
var conditionMet = false;

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers.length; j++) {
    if (i === j) continue;
    var product = numbers[i] * numbers[j];

    // Check if product matches any other number
    for (var k = 0; k < numbers.length; k++) {
      if (k !== i && k !== j && product === numbers[k]) {
        console.log("Condition is met: " + numbers[i] + " x " + numbers[j] + " = " + numbers[k]);
        conditionMet = true;
      }
    }
  }
}

if (!conditionMet) {
  console.log("Condition was not met.");
}
