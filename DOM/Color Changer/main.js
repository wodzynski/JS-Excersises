// My solution

var button = document.querySelector("button");
var wall = document.querySelector("BODY");
var wallColor = true;

button.addEventListener("click", function() {
    // if (wall.style.backgroundcolor == white) {
    if (wallColor) {
        wall.style.background = "purple";
    } else {
        wall.style.background = "white";
    }
    wallColor = !wallColor;
});

// function backColor() {
//     // if (wall.style.backgroundcolor == white) {
//     if (wallColor) {
//         wall.style.background = "purple";
//     } else {
//         wall.style.background = "white";
//     }
//     wallColor = !wallColor;
// }