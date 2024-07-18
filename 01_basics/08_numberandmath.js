// ++++++++++ Normal Declaration ++++++++++ //
const score = 100;
console.log(score); // 100


// ++++++++++ Number Declared with 'new' Keyword or 'Object' ++++++++++ //
const balance = new Number(1000);
console.log(balance); // Number {1000} or [Number: 1000] -> Specific Number-type console print and 
// on Browser's-inspact-console, see all about to Number-protocol or functions/methods.


// +++++ .toString +++++ //
console.log(score.toString()); // convert type in STRING -> "100"
console.log(score.toString().length); // 3 // [1, 0, 0]


// +++++ .toFixed +++++ //
// The toFixed() method rounds the string to a specified number of decimals.
console.log(score.toFixed(2)); // 100.00

// If the number of decimals are higher than in the number, zeros are added.
const num4Fixed = 5.26914;
console.log(num4Fixed.toFixed(10)); // 5.2691400000
console.log(num4Fixed.toFixed(2)); // 5.27


// +++++ .toPrecision +++++ //
const num4Precision = 23.7849;

// The .toPrecision() method formats a number to a specified length.
console.log(num4Precision.toPrecision(3)); // 23.9
console.log(Number(123.7849).toPrecision(3)); // 124
console.log(Number(1123.7849).toPrecision(3)); // 1.12e+3



// +++++ .toLocalString +++++ //
const zeros = 1000000;

// The default language depends on the locale setup on your computer. like-> en-IN {India English}, en-NZ {New Zealand English}, etc.
console.log(zeros.toLocaleString()); // 100,00,00 -> USA based
console.log(zeros.toLocaleString('en-IN')); // 1,0,00,000 -> Indain based



// +++++ Some basic methods should always be run on browser's-inspect. +++++ //

Number.MIN_SAFE_INTEGER // -9007199254740991
Number.MAX_SAFE_INTEGER // 9007199254740991

Number.MAX_VALUE // 5e-324
Number.MAX_VALUE // 1.7976931348623157e+308



// ++++++++++ Maths in JavaScript ++++++++++ //
console.log(Math);
// write on a Browser's-inspect console so you can see about all maths js-methods or functions and prototypes.
// .abs(), .round(), .ceil(), .floor(), .random(), .max(), .min(), .pow(), .sin(), .cos(), .tan(), .sqrt(), .log(), etc...


// +++++ .abs(value_for_do_absolute) +++++ //
console.log(Math.abs(-6)); // 6 
// A numeric expression for which the absolute value is needed.
// Returns the absolute value of a number (the value without regard to whether it is +ve or -ve).
// only '-ve' value ko '+ve' larta hai, '+ve' ko '-ve' nhi...
// eg. [-6 => 6],  [-21 => 21],  [84 => 84]


// +++++ .round(value_for_do_rounded) +++++ //
console.log(Math.round(7.8)); // 8
// The value to be rounded to the 'nearest-integer'.
// eg. [6.45 => 6],  [21.65 => 22],  [84.5 => 85]


// +++++ .ceil() & .floor() +++++ //
// .ceil() => The value to be rounded to the 'nearest-higher-integer'. [6.45 => 7],  [21.65 => 22],  [84.5 => 85]
// .floor() => The value to be rounded to the 'nearest-lowest-integer'. [6.45 => 6],  [21.65 => 21],  [84.5 => 84]


// +++++ .min() & .max() +++++ //
console.log(Math.min(1,3,2,0,5,4,8,7)); // 0
console.log(Math.max(1,3,2,0,5,4,8,7)); // 8



// ********** .random() ********** //
console.log(Math.random()); // Returns a pseudorandom number between '0 and 1' {every-time-unique}
// like 0.4934453568340851, 0.038253963895303444, 0.21613780881534006, ..........................


// Ques. -> how to one-digit left shift?
console.log(Math.random()*10);

// Ques. -> point ke pahle zero aane ki posobility ko kaise roke?
console.log((Math.random()*10) + 1);

// outputs of .random()
/*
0.2472776132195813 // console.log(Math.random());
0.8107508552546117 // console.log(Math.random()*10);
7.42943555725674 // console.log((Math.random()*10) + 1); // isme kabhi bhi point ke pahle zero nhi aa sakta hai.
*/

// Ques. -> We want to random values between "10 to 20", how to achieve it?
const min = 10; // minimum range
const max = 20; // maximun range
console.log(Math.floor((Math.random()*(max-min)+1) + min)); // always get an integer number between '10 to 20'

/*
Math.random()*(max-min); // [(max-min) = 10] // one-digit left shift
Math.random()*(max-min)+1; // [(max-min=10) + 1 => 11] // if we will get nine(9) from .random(), toh {11+9=20} bhi ho sake.
(Math.random()*(max-min)+1) + min; // [min=10] // set-starting-value higher than 10(ten).
Math.floor((Math.random()*(max-min)+1) + min); // for REMOVING all floating(after-point-digits) numbers and get the "nearest-lowest-integer".
*/