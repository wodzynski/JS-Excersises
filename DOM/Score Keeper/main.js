var p1Button = document.querySelector("#b1");
var p2Button = document.getElementById("b2");
var resetButton = document.getElementById("reset");
var score1 = document.querySelector("#p1");
var score2 = document.querySelector("#p2");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === maxScore) {
            score1.classList.add("winner");
            gameOver = true;
        }
    }
    score1.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === maxScore) {
            score2.classList.add("winner");
            gameOver = true;
        }
    }
    score2.textContent = p2Score;
});

// function addScore(x, y) {
//     if (!gameOver) {
//         x++;
//         if (x === maxScore) {
//             y.classList.add("winner");
//             gameOver = true;
//         }
//     }
//     y.textContent = x;
// }

resetButton.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("input", function() {
    winningScoreDisplay.textContent = this.value;
    maxScore = Number(this.value);
    reset();
})