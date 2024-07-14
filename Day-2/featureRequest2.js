function comparisingAndLogical(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        console.log("Number are positive");
    }
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        console.log("Numbers are even");
    }
    if (num1 % 2 == 0 || num2 % 2 == 0) {
        console.log("Some one is even")
    }
    if (!num1 >= 0 || !num2 >= 0) {
        console.log("Some one is negative");
    }
}

comparisingAndLogical(12, -8);


function checkPositive(number) {
    number >= 0 ? console.log(number, " is positive") : console.log(number, " is negative");
}
checkPositive(12);
checkPositive(-23);