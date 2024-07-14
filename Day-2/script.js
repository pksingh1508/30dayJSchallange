//Activity 1: Arithmetic Operations
// Task 1
function addTwoNumber(num1, num2) {
    console.log("The sum : ", num1, " + ", num2, " = ", num1 + num2);
}
addTwoNumber(12, 23);

// Task 2
function subtractTwoNumber(num1, num2) {
    console.log("The difference : ", num1, " - ", num2, " = ", num1 - num2);
}
subtractTwoNumber(15, 12);

// Task 3
const multiplyTwoNumber = (num1, num2) => {
    console.log("The multiplication : ", num1, " * ", num2, " = ", num1 * num2);
}
multiplyTwoNumber(12, 23);

// Task 4
const divideTwoNumber = (num1, num2) => {
    console.log("The divide : ", num1, " / ", num2, " = ", num1 / num2);
}
divideTwoNumber(15, 5);

// Task 5
const remainder = (num1, num2) => {
    console.log("The remainder : ", num1, " % ", num2, " = ", num1 % num2);
}
remainder(3, 12);

// Activity 2: Assignment Operator
// Task 6

function plusEqualOperationAddition(num1, num2) {
    num1 += num2;
    console.log("The += addition : ", num1);
}
plusEqualOperationAddition(1, 34);

// Task 7
function minusEqualOperation(num1, num2) {
    num1 -= num2;
    console.log("The -= operation : ", num1);
}
minusEqualOperation(100, 34);

// Activity 3: Comprasion Operators
// Task 8

const compareTwoNumberVariation1 = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1, " is greater than ", num2);
    } else if (num2 > num1) {
        console.log(num2, " is greater than ", num1);
    } else {
        console.log(num1, " is equal to ", num2);
    }
}
compareTwoNumberVariation1(12, 23);

// Task 9
const compareTwoNumberVariation2 = (num1, num2) => {
    if (num1 >= num2) {
        console.log(num1, " is greater/equal than ", num2);
    }

    if (num1 <= num2) {
        console.log(num1, " is less/equal to ", num2);
    }

}
compareTwoNumberVariation2(12, 23);


// Task 10
const compareTwoNumberVariation3 = (num1, num2) => {
    if (num1 == num2) {
        console.log(num1, " is equal to ", num2, " by == operator");
    } else {
        console.log(num1, " is not equal to ", num2, " by == operator");
    }
    if (num1 === num2) {
        console.log(num1, " is equal to ", num2, " by === operator");
    } else {
        console.log(num1, " is not equal to ", num2, " by === operator");
    }

}
compareTwoNumberVariation3(12, "12");

// Activity 4: Logical Operators
// Task 11

function logicalAND(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        console.log(num1, " and ", num2, " is positive number");
    }
}
logicalAND(12, 234);

// Task 12
function logicalOR(num1, num2) {
    if (num1 >= 0 || num2 >= 0) {
        console.log("i am inside if condition having Logical OR operaiton like (num1 >= 0 || num2 >= 0)");
    }
}
logicalOR(12, -23);

// Task 13
function logicalNOT(age) {
    if (!age > 18) {
        console.log("You are unable to drive, age = ", age);
    } else {
        console.log("You are able to drive, age = ", age);
    }
}
logicalNOT(23);

// Activity 5: Ternary Operator
// Task 14 and Feature Request 3
function checkPositive(number) {
    number >= 0 ? console.log(number, " is positive") : console.log(number, " is negative");
}
checkPositive(12);
checkPositive(-23);

