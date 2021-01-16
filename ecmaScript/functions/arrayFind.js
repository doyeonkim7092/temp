// Array.prototype.find 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트 값을 리턴, 만족하는 값이 없다면 undefined



const email = [
  "gothone@naver.com", 
  "gothone7092@gmail.com", 
  "rowdy@nate.com",
  "zzangbogo@hanmail.net"
];

const gmail = email.find(item=>item.includes("gmail.com"))

console.log(gmail)