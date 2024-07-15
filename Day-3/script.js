// Activity 1 : if-else statements
// Task 1

function checkNumber(num) {
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Number is zero");
    }
}

checkNumber(12);

// Task 2
function isIlivisibletoVote(age) {
    if (age >= 18) {
        console.log("you are eligible to vote");
    } else {
        console.log("you are not eligible to vote");
    }
}
isIlivisibletoVote(23);

// Task 3
function largetofThree(num1, num2, num3) {
    if (num1 > num3) {
        if (num1 > num2) {
            console.log(num1, " is greater from all the other numbers");
        } else if (num2 > num3) {
            console.log(num2, " is greater from all the other numbers");
        } else {
            console.log(num3, " is greater from all the other numbers");
        }
    } else {
        if (num2 > num3) {
            console.log(num2, " is greater.")
        } else {
            console.log(num3, " is greater.")
        }
    }
}
largetofThree(30, 20, 10);


// Task 4
function dayBasedOnNumber(num) {
    let i = num;
    switch (i) {
        case 1:
            console.log("Sunday");
            i++;
            break;
        case 2:
            console.log("Monday");
            i++;
            break;
        case 3:
            console.log("Tuesday");
            i++;
            break;
        case 4:
            console.log("Wednesday");
            i++;
            break;
        case 5:
            console.log("Thursday");
            i++;
            break;
        case 6:
            console.log("Friday");
            i++;
            break;
        case 7:
            console.log("Saturday");
            i++;
            break;
        default:
            console.log("Invalid number");
    }
}
dayBasedOnNumber(3);

// Task 5
function grading(num) {
    let mark = num;
    let i = 1;
    switch (i) {
        case 1:
            if (mark >= 90 && mark <= 100) {
                console.log("Grade = A");
                break;
            }
            i++;
        case 2:
            if (mark >= 70 && mark < 90) {
                console.log("Grade = B");
                break;
            }
            i++;
        case 3:
            if (mark >= 50 && mark < 70) {
                console.log("Grade = C");
                break;
            }
            i++;
        case 4:
            if (mark >= 30 && mark < 50) {
                console.log("Grade = D");
                break;
            }
            i++;
        case 4:
            if (mark >= 0 && mark < 30) {
                console.log("Grade = F");
                break;
            }
            i++;
        default:
            console.log("something went wrong");


    }
}
grading(10);


// Task 6
function evenOdd(number) {
    number % 2 == 0 ? console.log("Even") : console.log("Odd");
}
evenOdd(12);

// Task 7

function checkLeapYear(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
        console.log("Leap Year");
    } else {
        console.log("not leap year");
    }
}
checkLeapYear(1900);

