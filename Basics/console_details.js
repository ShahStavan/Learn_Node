const { copyFileSync } = require("fs");

console.log("Welcome to the Node World");
console.warn("This is a warning");
console.error("This is an error");
console.error(new Error("This is an error"));

// Console.trace() is used to trace the function call stack of the program.
// It prints the current stack trace to the console.

var SmallFunction = function() {
    console.trace("This is a trace");
}

var BigFunction = function() {
    SmallFunction();
}

BigFunction();

// Console.time() and Console.timeEnd() are used to compute the time taken by a block of code.
// It takes a label as a parameter and computes the time taken by the block of code between them.

console.time("Time taken");
for (var i = 0; i < 100000; i++) {
    ;
}
console.timeEnd("Time taken");

// Console.table() is used to display data in tabular form.
// It takes an array or object as a parameter and displays the data in a tabular format.

var languages = [
    { name: "C", year: 1972 },
    { name: "C++", year: 1983 },
    { name: "Java", year: 1995 },
    { name: "Python", year: 1991 },
    { name: "JavaScript", year: 1995 }
];

console.table(languages);

// Console.group() and Console.groupEnd() are used to group the output.
// It takes a label as a parameter and groups the output until Console.groupEnd() is called.

console.group("Languages");
console.log("C");
console.log("C++");
console.log("Java");
console.groupEnd("Languages");

// Console.count() is used to count the number that the function hit by this counting method.
// It takes a label as a parameter and counts the number of times the label is hit.

for (var i = 0; i < 10; i++) {
    console.count("Counting");
}

// Console.clear() is used to clear the console.
// It does not take any parameter.

// console.clear();

// Console.assert() is used to check if the given expression is true or false.
// It takes an expression as a parameter and checks if the expression is true or false.
// If the expression is false, it will display the given message.

console.assert(5 > 10, "5 is not greater than 10");

// Console.dir() is used to display the list of properties of a specified JavaScript object.
// It takes an object as a parameter and displays the list of properties of the object.
console.dir(languages);

// Console.dirxml() is used to display an XML/HTML element as a DOM tree.
// It takes an element as a parameter and displays the element as a DOM tree.

// var element = document.getElementById("div1");
// console.dirxml(element);

