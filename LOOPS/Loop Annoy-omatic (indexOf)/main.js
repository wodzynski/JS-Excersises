// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");

// VERSION 2

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");