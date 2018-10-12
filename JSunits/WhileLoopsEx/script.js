var counter = -10;

while (counter < 20) {
    console.log(counter);
    counter++;
}

counter = 10;

while (counter <= 40) {
    console.log(counter);
    counter += 2;
}

counter = 301;

while (counter <= 333) {
    console.log(counter);
    counter += 2;
}

counter = 5;

while (counter < 51) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log(counter);
    }
    counter++;
}