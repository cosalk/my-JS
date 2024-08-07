// Ques-> Array in javascript?
// Ans-> The Array object, as with arrays in other programming languages, enables storing a collection of 'multiple items' under a single variable name.
// **JavaScript arrays are 'resizable' and can contain a 'mix' of different data_types.



// ++++++++++ Syntax01 of an Array ++++++++++ //
const arr1 = [10, 20, 30, 40, 50, true, "cosalk"];

// +++++ Syntax02 of an Array *using 'new' keyword +++++ //
const myArr = new Array(10, 20, 30, 40, 50, 60, 70, 80, 90);

// +++++ how to access +++++ //
console.log(myArr); // [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(myArr[0]); // 10
console.log(myArr[5]); // 60
console.log(myArr[7]); // 80



/* Writing this 👇
 'const dummyArr = [12, 45, 68, 72]
 dummyArr'
 in the browser's console brings up the 'prototypes' of the array
 */



 // ++++++++++ Array_Methods ++++++++++ //

 // The push() method of Array, 'adds' the specified elements to the end of an array and returns the new length of the array.
 const movies = ["Jumanji", "Avatar", "Barbarian", "Smile"];
 movies.push("Jurassic_Park");
 console.log(movies); // ["Jumanji", "Avatar", "Barbarian", "Smile", "Jurassic_Park"] // "Jurassic_Park" has added {end-of-array}


 // The pop() method of Array, 'removes' the last element from an array and returns. This method changes the length of the array.
 const realHeros = ["Mahatma_Gandhi", "Sardar_Patel", "Bhagat_Singh", "Nana_Sahib", "Denial_Rock"];
 realHeros.pop();
 console.log(realHeros); //["Mahatma_Gandhi", "Sardar_Patel", "Bhagat_Singh", "Nana_Sahib"]; // 'Denial_Rock' has removed {end-of-array}


 // The unshift() method of Array, 'adds' the specified elements to the *BEGINNING/START of an array and returns the new length of the array.
 const poet = ["Javed_Akhtar", "Shiv_Kumar_Batalvi", "Gulzaar_Sahab", "Anjaan(lalji)"];
 poet.unshift("Kishore_Kumar");
 console.log(poet); // ["Kishore_kumar", "Javed_Akhtar", "Shiv_Kumar_Batalvi", "Gulzar_Sahab", "Anjaan(lalji)"] // "Kishore_Kumar" has added {beginning-of-array}


 // The shift() method of Array, 'removes' the first element from an array and returns. This method changes the length of the array.
 const myColours = ["Red", "Yellow", "Cyan", "Teelblue", "Lavendar"];
 myColours.shift();
 console.log(myColours); // ["Yellow", "Cyan", "Teelblue", "Lavendar"]; // 'Red' has removed {beginning-of-array}



 // .join() -> The join() method of Array, 'creates and returns a new string' by concatenating all of the elements in its array, separated by 'commas' or a 'specified separator' string. 
 // *If the array has only one item, then that item will be returned without using the separator.
 // default separater -> 'Commas'

//{syntax} -> .join(separater)
 const weather = ['Summer', 'Rainy', 'Winter'];
 console.log(weather.join()); // "Summer,Rainy,Winter"
 console.log(weather.join('')); // "SummerRainyWinter"
 console.log(weather.join('-')); // "Summer-Rainy-Winter"



// slice() & splice()
// The slice() method of Array, returns a shallow_copy(same_references) of a portion of an array into a new array object selected from start to end (*end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // ["duck", "elephant"]
console.log(animals.slice(2, -1)); // ["camel", "duck"]
console.log(animals.slice()); // ["ant", "bison", "camel", "duck", "elephant"]
console.log(animals); // ["ant", "bison", "camel", "duck", "elephant"] // **no_changes origal array


// The splice() method of Array, changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use 'toSpliced()'. To access part of an array without modifying it.
const myNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const newNumbers = myNumbers.splice(5);
console.log(newNumbers); // [66, 77, 88, 99];
console.log(myNumbers); // [11, 22, 33, 44, 55] // splice()_array removed from orignal_array
