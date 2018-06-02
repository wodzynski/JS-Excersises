//create secret number
var secretNumber = 4;

//aske user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
//check if higher
else if (guess > secretNumber) {
    alert("Too high. Guess again.");
} else {
    alert("Too low. Guess again!");
}