console.log("All numbers between -10 and 19:");

// for (var a = Number(-10); a <= 19; a++) {
//     console.log(a);
// }

var a = -10;
while (a <= 19) {
    console.log(a++);
}

console.log("All even numbers between 10 and 40:");

// var b = (10)
// while (b <= 40) {
//     if (b % 2 === 0) {
//         console.log(b++);
//     } else { b++ }
// }

// OR:
var b = (10);
while (b <= 40) {
    console.log(b);
    b += 2;
}

console.log("All odd numbers between 300 and 333:");
var c = Number(300);
while (c <= 333) {
    if (c % 2 === 1) {
        console.log(c)
        c += 2;
    } else { c++ }
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50:");
var d = Number(5);
while (d <= 50) {
    if ((d % 5 === 0) && (d % 3 === 0)) {
        console.log(d++);
    } else { d++ }
}