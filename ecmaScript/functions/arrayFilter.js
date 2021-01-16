//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

/*
arr.filter(callback(element[, index[, array]])[, thisArg])

element 처리할 엘리먼트
index 처리할 엘리먼트의 인덱스
array filter를 호출한 배열
thisArg callback을 실행할 때, this로 사용하는 값

*/

const email = [
  "gothone@naver.com", 
  "gothone7092@gmail.com", 
  "rowdy@nate.com",
  "zzangbogo@hanmail.net"
];

const noGmail = email.filter(item => !item.includes("gmail"))

console.log(noGmail)