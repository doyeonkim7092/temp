//arrayof

// const friends = ["dalf", "bigHead","smurf","black"]

// const test = Array.of("dalf","bigHead","smurf","black")

// console.log(test)

//array.from

const buttons = document.getElementsByClassName("btn")

console.log(buttons)

//likeArray
// buttons.forEach(element => {
//   element.addEventListener("click", ()=>{
//     console.log(`i clicked`)
//   })
// });
// lets checkit
// const bool = Array.isArray(buttons)
// console.log(bool)

// 유사배열객체를 얕게 복사하여 새로운 배열로 만든다.!
// html에서 굉장히 유용하게 사용가능하다
Array.from(buttons).forEach(element=>{
  element.addEventListener("click", ()=>{
    console.log(`i clicked button`)
  })
})