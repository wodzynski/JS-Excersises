var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("How old are you?");
// console.log("Your full name is " + firstName + " " + lastName + ".");
console.log("Your full name is " + firstName, lastName + ".");
// console.log('Your full name is ${firstName} ${lastName}.'); // that's not workingg apparently :/
console.log("You are " + age + " years old.");

// OR:

var fullName = firstName + " " + lastName
console.log("Your full name is " + fullName + ".");
console.log("You are " + age + " years old.");