var response = prompt("Are we there yet?");

while (response !== "yes" && response !== "yeah") {
    response = prompt("Are we there yet?");
}

alert("We made it!");