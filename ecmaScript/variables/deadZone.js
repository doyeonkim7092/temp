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

//let blocked ur declare & assign 
//선언과 할당이 뒤집어졋는데도 변수를 호이스팅(끌어올려주는것)을 막아준다
//이렇게 선언과 할당의 뒤바끼는 실수를 하지 않게 하기 위해서라도, let을 사용해야 한다
let name4 = 'dd'
console.loj(name4)

