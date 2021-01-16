// function basis(){
// }

// const arrow =  () =>{
// }

//const names = ["rowdy", "zeliek","mograine","blaumeux"]
// BASIC func
// const addV = names.map(function(items){
//   return items+"V"
// })
// console.log(addV)

//Arrow EXample
// 01
// const addX = names.map((items, index)=>{
//   console.log(`second Argument is INDEX, ${index}`)
//   return items+"X"
// })

//02 implicit return 
//02-1 just implicit return 
// const addX = names.map(items=>items+"X")
//02-2 implicit return with 2 argument
// const addX = names.map((items, index)=>items+"X"+index)
//02-2 implicit return with 2 argument & Regular expressions
// const addX = names.map((items, index)=>`${items}X, INDEX is, ${index}`)

// console.log(addX)

//03 with  "THIS"

// const person = {
//   name : 'doyeon',
//   age : 30,
//   addYear(){
//     this.age++;
//     console.log(`this.age === ${this.age}`)
//   }
// }
// console.log(person)
// person.addYear()
// person.addYear()
// console.log(person)

// const person = {
//   name : 'doyeon',
//   age : 30,
//   addYear:()=>{
//     this.age++;
//     console.log(`this.age === ${this.age}`)
//   }
// }
// console.log(person)
// person.addYear()
// person.addYear()
// console.log(person)

const email = [
  "gothone@naver.com", 
  "gothone7092@gmail.com", 
  "rowdy@gmail.com",
  "zzangbogo@hanmail.net"
];

// Array.prototype.find 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트 값을 리턴, 만족하는 값이 없다면 undefined
// const gmail = email.find(item=>item.includes("gmail.com"))
// console.log(gmail)

