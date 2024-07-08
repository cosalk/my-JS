// condition 01
let score = 9696
console.log(typeof score); // number
console.log(typeof (score)); // number //typeof_method_checking


// condition 02
let score2 = "9696"
console.log(typeof score2); // string

// conversion for condition 02
let valueInNumber2 = Number(score2) // capital letter is must for conversion like number => Number, string => String etc.
console.log(valueInNumber2); // 9696 {this is a number}


// condition 03
let score3 = "9696kk"

// conversion for condition 03
let valueInNumber3 = Number(score3) // score3 is converted in number Successfully but value is 'NaN'
console.log(valueInNumber3); //NaN {not a number}


// list of converted values
/*
9696 => It is already number value but we don't know so, I will Check or Convert
"9696" => 9696 {String to Number}
"9696kk" => NaN {It is string but that have contain alphabets so converted in Number, but value will be NaN}
null => 0 Zero {this is dangerous for TEMPATURE values and etc.}
undefined => NaN
true => 1; false => 0 {boolean}
*/



// other conversion

// 1 => true; 0 => false
// "" => false (empty_string)
// "kaushal" => true


/* ****************Operations***************** */

let value = 9
let negValue = -value
console.log(negValue); // -9

// Basic Operations
console.log(9+2); // 11
console.log(9-2); // 7
console.log(9*2); // 18
console.log(9**2); // 81 (9^2)
console.log(9/2); // 4.5
console.log(9%2); // 1


// ******String Operations*******
let str1 = "namste"
let str2 = " kaushal"
let str3 = str1 + str2
console.log(str3); // namste kaushal {space hai output me}

console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + "2"); // 12
console.log(1 + "2" + 2); // 122

console.log(1 + 2 + "2"); // 32
// How to process :
// 1. The first two numbers, 1 and 2, are added together, resulting in 3.
// 2. The result of the addition (3) is then concatenated with the coerced string "2".
// 3. This happens because the plus operator (+) can also be used for string concatenation.
// 4. The final result is the string "32".

// console.log(2 + 5 * 4 / 3 % 8) // Code Readablity is always high, so use blocks.
// it means => ((2+5) * (8-3) / 2) 



// **********boolean Operation***********
console.log(true) // true
console.log(+true) // 1
// console.log(true+) // unexpected tokens/error
console.log(+"") // 0 because empty string-value is false, and false is 0.

// **********
// Q. => Why are these boolean operations avoid ?
// Ans. => these all boolean operations should not use, because this is not readable, but readablity is always high. (avoid these boolean operations)


//********** prefix & postfix **********
let gameCounter = 0
gameCounter++ // postfix
// ++gameCounter // prefix
console.log(gameCounter) // 1


// Q. => how to use postfix and prefix ?
// Ans. => If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value 'before incrementing'.

// => If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value 'after incrementing'.

// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation



// link to learn
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion