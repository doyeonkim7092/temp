//forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

/*
element 처리할 엘리먼트
index 처리할 엘리먼트의 인덱스
array filter를 호출한 배열
thisArg callback을 실행할 때, this로 사용하는 값
*/

const email = [
  "gothone@naver.com", 
  "gothone7092@gmail.com", 
  "rowdy@gmail.com",
  "zzangbogo@hanmail.net"
];

//sol01.
// const cleaned = []
// email.forEach(item=>cleaned.push(item.split("@")[0]))
// console.log(cleaned)

//sol02.
// const cleaned = email.map(item=>item.split("@")[0])
// console.log(cleaned)

//sol03. Array(Object) Return 형태 확인 해볼 것
//implicit return 은 화살표 함수에서 {} 을 쓰면 사용할 수 없고, 그 바로 바깥은 실행()으로 덮어주면 object도 implicity return 가능 
// const cleaned = email.map((item, index)=>({username:item.split("@")[0], index:index}))
// 객체의 키와 값의 이름이 같으면 키만 입력해도 됨.
const cleaned = email.map((item, index)=>({username:item.split("@")[0], index}))
// console.log(cleaned)
console.table(cleaned)

