// Four different variables
var number1 = 5;
var number2 = 10;
var message1;
var message2;

// Check the first number using if-else
if (number1 % 2 === 0) {
  message1 = "The number " + number1 + " is even.";
} else {
  message1 = "The number " + number1 + " is odd.";
}

// Check the second number using if-else
if (number2 % 2 === 0) {
  message2 = "The number " + number2 + " is even.";
} else {
  message2 = "The number " + number2 + " is odd.";
}

// Display the messages using console.log()
console.log(message1);
console.log(message2);