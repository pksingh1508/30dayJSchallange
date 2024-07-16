// Task 1
function printTillN(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
printTillN(10);

// Task 2
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, " * ", i, " = ", n * i);
    }
}
printTable(5);

// Task 3
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("The sum is ", sum);

// Task 4
let j = 10
while (j >= 1) {
    console.log(j);
    j--;
}

// Task 5
let l = 1;
do {
    console.log(l);
    l++;
} while (l <= 5);

// Task 6
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log("factorial: " + fact);
}
factorial(5);

// Task 7
function printStarPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(" * ");
        }
        console.log();
    }
}
printStarPattern(5);

// Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}