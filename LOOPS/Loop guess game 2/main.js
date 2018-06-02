//create secret number
var secretNumber = 4;

//aske user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
while (guess !== secretNumber) {
    // Check if higher
    if (guess > secretNumber) {
        // var guess = Number(prompt("The number is lower!"));
        var stringGuess = prompt("The number is lower!");
        var guess = Number(stringGuess);
    } else {
        // ask for higher
        // var guess = Number(prompt("The number is higher!"));
        var stringGuess = prompt("The number is higher!");
        var guess = Number(stringGuess);
    }
}
console.log("You have guessed it!");