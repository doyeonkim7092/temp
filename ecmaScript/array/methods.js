const friends = [
  "gothone@naver.com", 
  "gothone7092@gmail.com", 
  "rowdy@nate.com",
  "zzangbogo@hanmail.net"
];

//find
// const gmail = friends.find(element => element.includes(`gmail`))
// const isTrue = friends.find(element => true) //first ELe

// console.log(gmail)
// console.log(isTrue)

//findIndex 
// const target = friends.findIndex(element => element.includes(`hanmail`))
// console.log(target)

//hanmail로 되어있는 이메일을 찾아서, gmail로 고쳐 보려면 어떻게 해야 할까.
//01 hanmail로 되어있는 element를 찾는다. (findIndex를 이용해보자)
//02 element의 index를 찾으면, 수정!
//03 확인

// const check = () => friends.findIndex(element => element.includes(`hanmail`))

// let target = check()

// if(target !== -1){

//   console.log(`check Function EXE after target is ${target}`)

//   const userName = friends[target].split("@")[0]

//   console.log(`userName is splitted from target, ${userName}`)

//   const email = "gmail.com"

//   friends[target] = `${userName}@${email}`

//   console.log(`target = ${target}, friends = ${friends}`)

// }

//DONE!?!!

/*
arr.fill(value[, start[, end]])

value 배열을 채울 값

start 시작인데스 기본값 0

end 끝 인덱스 기본값은 this.length

*/


const check = () => friends.findIndex(element => element.includes(`hanmail`))

let target = check()
console.log(target)

if(target !== -1){

  friends.fill("*".repeat(5), target)
  
}

console.log(friends)



