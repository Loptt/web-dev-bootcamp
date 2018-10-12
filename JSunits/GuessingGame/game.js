var secretNumber = 4;

var guess = prompt("Guess a number");

if (Number(guess) === secretNumber) {
    alert("You are right!");
}

if (Number(guess) < secretNumber) {
    alert("Too low!");
}
else {
    alert("Too high");
}