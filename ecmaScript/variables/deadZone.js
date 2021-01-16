//temporal dead zone !?

//check basically javascript run code from top to bottom !!

var name = 'doyeon'
console.log(name)
// it will console 'doyeon' , lets check other EX

console.log(name2)
var name2 = 'rowdy'
// console will undefined

console.log(name3)
//it will be Error 
//Uncaught referenceError -> nothing to reference

//hoisting
//so code will moved somewhere, and maybe there will exe like this
var name3;
console.log(name3);
name3 = 'doyeon'

console.log(name4)
let name4 = 'dd'
