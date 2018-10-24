function printReverse(array) {
    for (var i = array.length-1; i >= 0; --i) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var firstElement = array[0];
    var uniform = true;

    array.forEach(function(element) {
        if (element !== firstElement) {
            uniform = false;
            return;
        }
    });

    return uniform;
}

function sumArray(array) {
    var sum = 0;

    array.forEach(function(element) {
        sum += element;
    });

    return sum;
}

function max(array) {
    var max = array[0];

    array.forEach(function(element) {
        if (element > max) {
            max = element;
        }
    });

    return max;
}