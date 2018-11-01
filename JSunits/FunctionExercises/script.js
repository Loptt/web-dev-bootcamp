function isEven(number) {
    return number % 2 === 0;
}

function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; ++i) {
        result *= i;
    }

    return result;
}

function kebabToSnake(kebab) {
    var construct = "";
    for (var i = 0; i < kebab.length; ++i) {
        if (kebab[i] === "-") {
            construct = kebab.substr(0, i) + "_" + kebab.substr(i + 1);
            kebab = construct;
        }
    }

    return kebab;
}

var kebab = "dogs-are-awesome";

console.log(kebabToSnake(kebab));
