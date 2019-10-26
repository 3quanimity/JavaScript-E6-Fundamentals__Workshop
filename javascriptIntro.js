// Note: you can copy/paste the code in https://playcode.io to run it on its console

// // ************ LOGGING OUTPUT & CONSOLE
// alert('Hello World'); // Do not use for debugging. Stops the script!
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');
// console.log(prompt("age"))

// // ************ DECLARING VARIABLES (var, let, const)
// var level = "junior"

// const name = "someone"
// let age = 99;

// let can be re-assigned, const can not
// name = "someone2"
// age = 100;
// console.log(age)

// ************ DATA TYPES
// String, Number, Boolean (6 falsies), Null, Undefined, Symbol, Object
// Arrays, Functions, Objects

// // ************ PRIMITIVE TYPES
// const name = 'Adam';
// const age = 37;
// const rating = 3.5;
// const isPerson = true;
// const x = null;
// let y;
// let z; // undefined;

// // ************ ARRAYS - Store multiple values in a variable
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apples', 'oranges', 'pears', 'grapes'];
// let hobbies = ["sleep", 33, true];
// console.log(numbers, fruits, hobbies);

// // ************ OBJECTS LITERALS
// const person = {
//   name: "Eve",
//   age: 5000,
//   isPerson: true,
//   hobbies: ["none", "none"]
//   };

// // ************ FUNCTIONS
// let firstFunc = () => {}

// // Check type
// console.log(typeof firstFunc);

// // ************ STRINGS Concatenation

// console.log('My name is ' + name + ' and I am ' + age);

// //  Template literal (use this one!)
// console.log(`My name is ${name} and I am ${2+3}`);

// // // ************ Special Characters (\, \', \n, \\)
// console.log('je m\'appelle Foulan')

// //  ************ STRING METHODS & PROPERTIES
// let s = 'Hello World';
// let val;

// // Get length
// val = s.length;

// // String Index
// console.log(s[0]);

// // Change case
// val = s.toUpperCase();
// val = s.toLowerCase();

// // // Get sub string
// val = s.substring(0, 5);

// Split into array
// val = s.split('');
// val = val.join('+');

// console.log(s)
// console.log(val)

// // ************ ARRAY METHODS & PROPERTIES

// const fruits = ['apples', 'oranges', 'pears', 'grapes'];
// console.log(fruits)
// // Get length

// // Get one value (!: Arrays start at 0)
// console.log(fruits[3]);

// // Add value using push()
// fruits.push('strawberries');

// // Add to beginning
// fruits.unshift('mangos');

// // Remove last value
// fruits.pop();

// // Remove first value
// fruits.shift();
// console.log(fruits);

// // // Check if array
// console.log(Array.isArray(fruits));

// // // Get index
// console.log(fruits.indexOf('ssss'));

// console.log(fruits);

// // ************ ARITHMETIC OPERATORS
// + , - , * , / , % , ++ , -- , **

// console.log(13-2)
// console.log('3'*'2')
// console.log(3*'TEXT')
// console.log('10'/'2')
// console.log(10%2)
// console.log(10%3)
// console.log('3'**'2')

// console.log(5+3)
// console.log(5+'3')

// let y = 5
// let z = 16
// console.log(++y)
// console.log(y)
// console.log(y++)
// console.log(y)
// console.log(y)

// console.log(z++)
// console.log(z)

// // ************ OBJECT LITERALS
// const person = {
//   firstName: 'Adam',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// };

// // Get single value (obj.key)

// // Add property
// person.email = 'jdoe@gmail.com';
// person.hobbies.push('singing');
// console.log(person);

// console.log(person)

// // ************ /!\ Array of objects
// const users = [
//   {
//     name: 'person',
//     age: 23
//   },
//   {
//     name: 'person 2',
//     age: 31
//   },
//   {
//     name: 'person 3',
//     age: 155
//   }
// ];

// // //*************** CONST MUTABILITY

// const person = {
//   name: 'foulan',
//   age:27,
//   adresse:'tunis'}

// // person = {name: 'ali'}

// person.name = 'mohamed'

// delete person.age

// // // // Add property
//  person.email = 'jdoe@gmail.com';

// console.log(person)

// const numbers = [1,2,3]

// // numbers = [2,3]

// numbers[1] = 'hello'

// console.log(numbers)

// // ************ TRUTHY & FALSY
// false, undefined, null, 0, "", NaN

// let test=null;

// // console.log((test))
// console.log(Boolean(test))

// //**** LOGICAL OPERATORS

// // ********** X && Y
// // Returns first value if falsy
// console.log( 0 && 5 )

// // ********** X || Y
// // Returns first value if truthy
// console.log( 0 && 5 )

// //  EQUALITY OPERATOR

// =	assigns a value to a variable*

// ==	compares the value of the variables

// ===	compares the value and type of the variables

// ! returns the opposite boolean

// !=	compares the inequality based on value

// !==	compares the inequality based on value and type

// ********************** SECOND PART ********************** //

// ********************** LOOPS ********************** //

// // ********************** For
// for (let i = 1; i <= 10; i++) {
//   console.log(`For Loop Number: ${i}`);
// }

// // ********************** While
// let i = 1;
// while (i <= 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// ********************** Loop Through Arrays
// // Array of objects
// const todos = [22, 55, 66];
// // // ********************** For Loop
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

// // // ********************** For...of Loop
// for (let x of todos) {
//   console.log(x);
// }

// // // ********************** For...in Loop
// for (let i in todos) {
//   console.log(todos[i]);
// }

// // ********************** HIGH ORDER ARRAY METHODS ********************** //

// // ********************** forEach() - Loops through array
// todos.forEach(function(todo, i) {
//   // console.log(`${i + 1}: ${todo.text}`);
//   console.log(todo);
// });

// // ********************** map() - Loop through and create new array
// const todoText = todos.map(function(todo) {
//   return todo.text;
// });

// console.log(todoText);

// // ********************** filter() - Returns array based on condition
// const completedTodos = todos.filter(function(todo) {
//   // Return only todos that are complete
//   return todo.isComplete === true;
// });
// console.log(completedTodos);

// const tab = [6, 0, 6, 0, 6, 5, 68, 0, 'qsdqsdq', 555];
// const ones = tab.filter(num => {
//   // Return only the 1s
//   return num === 6;
// });
// console.log(ones);

// // ********************** CONDITIONALS ********************** //

// Simple If/Else Statement
const x = 30;

// if (x === 10) {
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10');
// }

// // Switch (/!\break)
let color = 'black';

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is neither red nor blue');
// }

// // Ternary operator / Shorthand if
// color === 'red' ? 'is red' : "isn't red";
// console.log(color === 'red' ? 'is red' : "isn't red");

// // ****************** FUNCTIONS *********************** //

// function greet(x = 3) {
//   return `Hello ${x}`;
// }

// console.log(greet('a  aa'));

// // ARROW FUNCTIONS
// const greet = name => {
//   console.log(`Hello ${name}`);
// };

// greet('Adam');
