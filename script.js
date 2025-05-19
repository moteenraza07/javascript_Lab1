console.log("Hello from javascript");

//Declare and Use Variables
var studentName = "Moteen";
var studentAge = 30;
var isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

//Demonstrate Data Types
let teamName = "Raptors";
console.log(teamName)
let totalNumberOfWins = 30;
console.log(totalNumberOfWins)
let makePlayoffs = false; 
console.log(makePlayoffs)
let colors = ["Red", "Blue", "Orange", "Purple", "Black"]
console.log(colors);

const person = {
    firstName: "Moteen", 
    lastName: "Raza",
    age: 30, 
    isStudent: true, 

};

console.log(person);

console.log(`Hello my name is ${person.firstName} i'm ${person.age} years old.`)



// Arithmetic Operators
let a = 5;
let b = 10;
// Adding 2 numbers
let addition = a + b; 
console.log(addition);
//Subracting 2 numbers
let subtraction = b - a;
console.log(subtraction);
// Multiplying 2 numbers
let mutiply = a * b;
console.log(mutiply);
// Diving 2 numbers
let division = b / a;
console.log(division);

console.log('Initial value of a: ', a)
a += 3;
console.log('After a += 3: ', a);

a -= 3;
console.log('After a -=', a);

a *= 3;
console.log('After a *=', a);

a /= 3;
console.log('After a /=', a);

//Comparison Operators 

let x = 7;
let y = 20;
console.log("20" == y); // Equality
console.log("20" === y); // Strict Equality
console.log("20" !== y); // Strict inequality 
console.log(x != y); // Inequality
console.log(x < y); // Less than
console.log(x > y); // Greater than
console.log(x <= y); // Less than or equal to
console.log(x >= y); // Greater than or equal to

// Logical Operator

let m = true; 
let p = false;
console.log(m && p); // Logical AND
console.log(m || p); // Logical OR
console.log(!m); // Logical NOt


// function

function sayHello () {
    var showHello = "Hello World!";
    console.log(showHello);
}
 sayHello();


