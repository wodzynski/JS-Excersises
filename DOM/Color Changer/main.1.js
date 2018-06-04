// other, shorter option

var button = document.querySelector("button");
var wallColor = true;

button.addEventListener("click", function() {
    // if (wall.style.backgroundcolor == white) {
    if (wallColor) {
        document.body.style.background = "purple";
    } else {
        document.body.style.background = "white";
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