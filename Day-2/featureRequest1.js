
function arithmeticOperations(num1, num2, type) {
    let ch = type;
    switch (ch) {
        case '+':
            console.log("num1 + num2 = ", num1 + num2);
            break;
        case '-':
            console.log("num1 - num2 = ", num1 - num2)
            break;
        case '*':
            console.log("num1 * num2 = ", num1 * num2)
            break;
        case '/':
            console.log("num1 / num2 = ", num1 / num2)
            break;
        case '%':
            console.log("num1 % num2 = ", num1 % num2)
            break;
        case '=':
            console.log("num1 + num2 = ", num1 + num2);
            console.log("num1 - num2 = ", num1 - num2)
            console.log("num1 * num2 = ", num1 * num2)
            console.log("num1 / num2 = ", num1 / num2)
            console.log("num1 % num2 = ", num1 % num2)
            break;

        default:
            console.log("something unexpected")
            break;
    }

}

arithmeticOperations(12, 2, '=');