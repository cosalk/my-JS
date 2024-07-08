const userId = 9696
let userMail = "polo@gmail.com"
var userPassword = "leng@123"
userGender = "male" //not for use
let userName; //this is 'undefind', because it is not defined

// userId = 1234  //not allowed
// console.log(userId);

/* 
Prefer not to use 'var' 
because of issue in block scope and functional scope
*/

userMail = "myjs@gmail.com"
userPassword = "javascript@321"
userGender = "other"

console.table([userId, userMail, userPassword, userGender, userName]);