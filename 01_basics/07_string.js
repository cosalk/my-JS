// +++++++++++++++++ Normal String decaration +++++++++++++++++ //

const str = ""; // empty string

const myPhone = "Galaxy S22";
console.log(myPhone); // Galaxy S22

// 'add some' strings with 'concatenation' operator in console-line
console.log("Samsung " + myPhone + " Ultra"); // Samsung Galxy S22 ultra



// +++++++++++++++++ String Interpolation +++++++++++++++++ //

// STRING-INTERPOLATION => String interpolation provides a more readable, convenient syntax to format strings. It allows injecting variables, function calls, and arithmetic expressions 'directly' into a string.
// Interpolation create with BACKTICKS `sampled-string`
const myCountry = "India";
console.log(`Samsung ${myPhone} Ultra, manufactured in ${myCountry}`); // Samsung alaxy S22 ultra, manufactured in India 

// Ques. -> How to inject variable in STRING_INTERPOLATION ?
// Ans. -> ${variable_name}


// +++++++++++++++++ String Declared with 'new' Keyword or 'Object' +++++++++++++++++ //

const myGame = new String("Suduko");
console.log(myGame); // Suduko
/* 
const myGame = new String("Suduko");
console.log(myGame); // Suduko
=> these type syntax write or copy-paste at browser's-inspact-console so you can see all about to string-protocol and functions/methods.
*/
console.log(myGame[4]); // k
console.log(myGame.__proto__); // {} => this is prototype
console.log(myGame.length); // 6
console.log(myGame.toUpperCase()); // SUDUKO
console.log(myGame.charAt(2)); // d
console.log(myGame.indexOf("d")); // 2
console.log(myGame.substring(0, 4)); // Sudu
console.log(myGame.slice(-5, 3)); // ud

// trim() => it method is removed unnessesary 'white-spaces' or 'underscore' or 'hyphen' and etc from existing string.
const myName = "   cosalk   ";
const myNewName = myName.trim();
console.log(myNewName); // cosalk => (without spaces)


// other 'methods' or 'functions' for string
/*
=> .replace("old_value", "replace_value");
=> .includes("check_value");
=> split("that_value")
*/



// ++++++++++ Go To Browser's Inspect and Explore Some string Methods or Functions of string-protocols ++++++++++ //