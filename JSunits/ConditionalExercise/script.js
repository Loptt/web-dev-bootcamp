var age = prompt("What is your age?");

if (age < 0) {
    console.log("Error, invalid age!");
}

if (age === 21) {
    console.log("Age is 21");
}

if (age % 2 !== 0) {
    console.log("Age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Age is perfect square");
}