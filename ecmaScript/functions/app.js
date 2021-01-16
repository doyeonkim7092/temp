const button = document.querySelector("button")

button.addEventListener("click", function(){
  console.log(this)
  this.style.backgroundColor="red"
  console.log("i have been clicked")
}) 

// button.addEventListener("click", ()=>{
//   console.log(this)
//   this.style.backgroundColor="red"
//   console.log("i have been clicked")
// }) 

//arrow function rule 01.
//arrow function 안에 있는 this는 window를 참조한다. --- 바깥의 버블을 참조한다.!!!