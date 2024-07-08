
// Equality Check/Comparision
// Sameness Check/Comparision
// => Equality and Sameless are different comparisions


// Sameless Comparisions
console.log(2 > 1); //true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false

console.log("02" > 1); // true {"02" has changed in number 02/2}
console.log("2" > 1); // true {"2" has changed in number 02}
 

console.log(null > 0); // false {null, 'NaN' me convert hua hai}
console.log(null < 0); // false ,, ,, ,,
console.log(null == 0); // false ,, ,, ,,
console.log(null >= 0); // true {null, zero=0 me convert hua hai}
console.log(null <= 0); // true ,, ,, ,,


console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false


// Stricly Comparision { === }
// => The strict equality { === } operator checks whether its two operands are equal, returning a Boolean result.
// => JavaScript Strict Equality Operator { === } is used to compare two operands and return true if both the 'value' and 'type' of operands are the same.

console.log("2" == 2); // true {losely comparision} **check code line #15
console.log("2" === 2); // false {Stricly comparision}



// *** Summary of this commit that Clean-Code and Code-Readablity is too high always.
