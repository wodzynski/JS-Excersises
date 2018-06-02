//Is Even?

// function isEven(even) {
//     if (even % 2 === 0) {
//         return true;
//     }
//     return false
// }

function isEven(num) {
    return num % 2 === 0;
}

// factorial!

function factorial(f) {

    // while loops:

    // var factorial = Number(1);
    // if (f % 1 === 0 && f > 0) {
    //     while (f > 0) {
    //         factorial *= f--;
    //     }
    //     return factorial;

    // for loop, 2 variables:

    // if (f % 1 === 0 && f > 1) {
    //     for (var i = (f - 1); i > 0; i--) {
    //         f = f * i;
    //     }
    //     return f;
    // } else if (f === 0 || f === 1) {
    //     return 1;

    // for loop 3 variables:
    if (f % 1 === 0 && f >= 0) {
        var result = 1;
        for (var i = 2; i <= f; i++) {
            result *= i;
        }
        return result;
    }
    return ("False number!");
}

// Kebab to snake function:

var kebabToSnake = function(e) {
    var expression = "";
    for (let i = 0; i < e.length; i++) {
        if (e[i] === "-") {
            expression = expression + "_";
        } else { expression = expression + e[i]; }
    }
    return expression;
}

// function kebabToSnake(str) {
//     var newStr = str.replace(/-/g, "_");
//     return newStr;
// }