// Activity 1
// task 1
var myTask = 10;
console.log("Task 1: " + myTask);

// Task 2
let myTask2 = "Raju Bhai";
console.log("Task 2: " + myTask2);

// Activity 2
// Task 3
const myTask3 = false;
console.log("Task 3: " + myTask3);

// Activity 3 - Data Types
// Task 4
let myNumber = 10;
let myString = "Pawan Singh";
let myBool = true;
let myObject = {
    "name": "pawan",
    "rollNo": 10
};
let myArr = ["Pksingh", 10, "Apple"];
console.log("---------------Print the Data----------------");
console.log("number: " + myNumber);
console.log("string: " + myString);
console.log("boolean: " + myBool);
console.log("object:" + myObject.name);
console.log("Arr: " + myArr);
console.log("---------------Printing all the types------------------");
console.log("number type: " + typeof (myNumber));
console.log("string type: " + typeof (myString));
console.log("boolean type: " + typeof (myBool));
console.log("object type: " + typeof (myObject));
console.log("Arr type: " + typeof (myArr));


// Activity 4 - Reassign variables
// Task 5
let myValue = "Raju Bhai";
console.log("myValue initial : " + myValue);
myValue = "Shek singh";
console.log("myValue after reassign: " + myValue);


// Activity 5 - understanding const


// Task 6
const myData = 10;
// myData = 12;
// console.log("myData : " + myData); 

const mychangeData = {
    name: "Pawan ",
    roll: 10
};
mychangeData.roll = 12;
console.log(mychangeData)
console.log(typeof (mychangeData));



// Feature request - 1
function printBothValueandTypes(value) {
    console.log("Value is : " + value + " Type is : " + typeof (value));
};

printBothValueandTypes(myNumber);
printBothValueandTypes(myString);
printBothValueandTypes(myBool);
printBothValueandTypes(myObject);
printBothValueandTypes(myArr);



// Feature request - 2
function showBehaviour(value1, value2) {
    try {
        let data1 = value1;
        console.log("value 1 before reassign declare by LET:" + data1);
        data1 = value2;
        console.log("Value 2 after reassign declare by LET: " + data1);
    } catch (error) {
        console.log("Error in LET declaration on reassign: " + error)
    }


    try {
        const data2 = value1;
        console.log("value 1 before reassign declare by CONST:" + data2);
        data2 = value2;
        console.log("Value 2 after reassign declare by CONST : " + data2);
    } catch (e) {
        console.log("Error while trying to reassign value 2 declare by CONST ", e);
    }
}
