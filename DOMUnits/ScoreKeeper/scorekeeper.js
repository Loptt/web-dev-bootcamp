var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
    }

    if (p1Score === winningScore) {
        gameOver = true;
        p1Display.classList.add("winner");
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
    }

    if (p2Score === winningScore) {
        gameOver = true;
        p2Display.classList.add("winner");
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    
    gameOver = false;
}

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});