var age = Number(prompt("How old are you?"));
if (age < 0) {
    alert("ERRRROR!!!");
} else if (age === 21) {
    alert("Happy 21st Birthday!");
} else if ((age % 2) === 1) {
    alert("Your age is odd!");
    // if ((((age) ^ (1 / 2)) % 1) == 0) {
    if ((Math.sqrt(age) % 1) === 0) {
        alert("Perfect square!");
    }
}