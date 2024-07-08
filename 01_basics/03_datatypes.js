"use strict"; //treat all JS code as a newer version

// aleart(2+3)  //we are using nodeJS, not browser

// console.log(5 
//     + 2); //code readablity should be high, it means always write clean code



                     /**Primitive Data Types**/

// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

// string => " " or ' '
const myString = 'this is javascript programming';

// Number => -(253 − 1) {Number.MIN_SAFE_INTEGER} to 253 − 1 {Number.MAX_SAFE_INTEGER} // "2 to pwr 53"
const myNumber = 123;

// boolean => true or false
let isLoggedIn = true; // or false

// null => indicates an intentional absence = जानबूझकर अनुपस्थिति of an object value // standalone value
let myTemp = null;

// undefined => indicates the absence of a value 
let userName;
let userNameAgain = undefined;

// console.log(null === undefined)

// symbol => unique may be used as the key "like of an Object property"
const myId = Symbol('9696');
const myNextId = Symbol('9696');

console.log(myId === myNextId); // false : because every Symbol is Unique

// BigInt => created by appending 'n' to the end of an integer literal
const bigNumber = 9007199254740991n;



                    /**non Primitive Data Type (Reference type)**/

// Arrays => An array is a special variable, which can hold more than one value
const myLanguages = ['javascript', 'java', 'c++', 'python'];

// object => An object literal is a list of property names:values inside curly braces {} or [keys = values]
const myObj = {
    myName : 'kaushal',
    myAge : 19,
    myMob : 9696169159
}

// functions => A JavaScript function is a block of code designed to perform a particular task. it is executed when "something" invokes it (calls it).
// function assiged in a variable
const myFunction = function add() {
    const num1 = 10, num2 = 20;
    let myResuly = num1 + num2;
    console.log(myResult);
}

// noraml function
function subtract() {
    const num1 = 10, num2 = 20;
    let myResuly = num1 - num2;
    console.log(myResult);
}


// 'typeof' keyword and method => returns a string indicating the type of the operand's value.
// typeof => keyword
// typeof (value) => method
console.log(typeof "we are just start learning javascript") // string
console.log(typeof 19) // number
console.log(typeof true) // boolean

console.log(typeof null) // *object
console.log(typeof undefined) // *undefined