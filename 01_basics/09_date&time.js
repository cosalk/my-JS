// ****************** [ctrl + space] for Suggetion in VS-Code software ******************* //



// 'Date objects' encapsulate an integral number that represents 'miliseconds'
// since midnight at the begining of 'January 1st 1970' UTC
// TC39 is working on 'Temporal' API

let myDate = new Date()
console.log(myDate); // 2024-07-18T17:23:11.959Z // default-formate
console.log(myDate.toString()); // Thu Jul 18 2024 22:56:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Jul 18 2024
console.log(myDate.toLocaleString()); // 18/7/2024, 10:56:00 pm

console.log(typeof myDate); // object



// ***** CREATE ***** //
// Ques. -> We can also create 'own-date' with respect formates.
// Ans. -> YES
let myCreateDate = new Date(2024, 6, 18) // YYYY, MM, DD
console.log(myCreateDate.toDateString()); // Thu Jul 18 2024

// other formates
// => YYYY, MM, DD with TIME
let myNewDate1 = new Date(2024, 6, 18, 23, 6, 58)
console.log(myNewDate1.toString()); // Thu Jul 18 2024 23:06:58 GMT+0530 (India Standard Time)

// MM DD YYYY for using in 'INDIA'
let myNewDate2 = new Date("07-18-2024")
console.log(myNewDate2.toString()); // Fri Jul 18 2024 00:00:00 GMT+0530 (India Standard Time)

// Ques. -> How to get specific property from Date&Time object
console.log(myNewDate1.getDate()); // 18
console.log(myNewDate1.getDay()); // 4 [Thursday] // {0-mon, 1-tue, 2-wed, 4-thu, 5-fri, 6-sat, 7-sun}
console.log(myNewDate1.getTime()); // 1721325390250 // time in 'milisecond' // 1jan1970 to 18july2024 23:26:30
console.log(myNewDate1.getUTCMonth()); // 6 [July] // {0-jan, 1-feb, 2-mar, ..., 6-jul, ..., 12-nov, 13-dec}



// ***** Time Stamp ***** //
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1721325390250 // time in 'milisecond' // 1jan1970 to 18july2024 23:26:30

// Ques. -> How to convert output 'milisecond' to 'second'
// we know that [1000ms = 1s]
console.log(myTimeStamp/1000); // 1721325390.25 // time in 'second' but point ke baad 3digit h
console.log(Math.floor(myTimeStamp/1000)); // 1721325390 // time in totaly 'second'



// ***** using String-Interpolation with 'Date' ***** //
let dummyDate = new Date()
let dummyDate2 = new Date(2024, 6, 20)
console.log(`my plain takeoff date is ${dummyDate.getDate()}, and i will reach home at ${dummyDate2.getDate()}`);



// ***** important properties for .toLocalString ***** //
console.log(dummyDate2.toLocaleString('default', {
    weekday: 'long'
})); // mon->monday, sat-> saturday, sun-> sunday, ...