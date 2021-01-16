
//기존01
function sayHi(name){
  return "hello,"+name
}
console.log(sayHi("dy"))

//기존02 
function sayHi(name){
  return "hello,"+(name || "KIM")
}
console.log(sayHi())


//default values 

function sayHi3(name="doyeon"){
  return "hello,"+name;
}
console.log(sayHi3())

//default values with Arrow function && implicity return
//default values can also array, variable, object ~
const arrow = (name="arrow")=>("hello,"+name)


console.log(arrow())