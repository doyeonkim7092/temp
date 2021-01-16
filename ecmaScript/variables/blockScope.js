//block Scope

//01
// if(true){
//   const hello = 'hi';
// }
// will be Reference Error 
//hello is exist in if block
//if 블록 에서만 hello 라는 변수가 존재하게 되는 것,
//console.log(hello)

//02
// if(true){
//   var say = 'hi'
// }
// console.log(say)

//03
//var는 function scope -> var can approach to 

// function a() {
//   var check = 'say'
// }
// console.log(`${check} it will make ref Error Again`)

//so block is  {} 내부에서, 외부에 선언된 변수에 접근 가능.
// 외부에서는 내부에 있는  있는 어떤 변수들에게 접근 불가.
//예시로 들면

//예시 01 - 내부에서 외부에 선언된 변수에 접근.
// let block  = 'hi'
// if(true){
//   console.log(`${block} block scope Example`)
// }

//예시 02 - 외부에서 내부에 선언된 변수에 접근 불가
// if(true){
//   let a = 'inside block'
// }
// console.log(`${a}REF_ERROR`)
