// Stack (use in Primitive data types) => follows the Last-In-First-Out (LIFO) principle
// Heap (use in Non-primitive/or Reference data types)


//+++++++++++++++++++ Stack (use in primitive) +++++++++++++++++++//
let myWebName = "www.ScrollKaro.org";

let anotherWebName = myWebName;
anotherWebName = "www.cosalk.in";

console.log(myWebName); // www.ScrollKaro.org
console.log(anotherWebName); // www.cosalk.in
// not change 'myWebName' value because primitive data type give only a copy not reference


//+++++++++++++++++++ Heap (use in Non-primitive or Reference-type) +++++++++++++++++++//
let userOne = {
    email: "user@github.com",
    device: "linux"
}

// assign userOne into userTwo
let userTwo = userOne;

// changing value of userTwo
userTwo.email = "cosalk@github.com";

console.log(userOne.email); // cosalk@github.com
console.log(userTwo.email); // cosalk@github.com

// We have only update/change the email of userTwo, but the email of userOne has also been updated/changed, because heap is always used in non-primitive(Reference-type) i.e. access to the original file of memory/datavalue is given in heap.