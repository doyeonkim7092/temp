var name = 'doyeon';

name = "rowdy";

console.log(`${name} name with var`) 

//자바스크립트는 재할당을 하도록 그냥 두되, 변한 내용에 대해서는 알려줄 수 없다.
//

let name3 = 'doyeon'

name3 = 'rowdy';

console.log(`${name3} name3 with let`)

const name2 = 'doyeon'

name2 = 'rowdy';

console.log(`${name2} name2 with const will make Error`)

// will Error Assignment to constant variable
// const block re-assignment  !  that is const

// so what is different var & let ==> scope만으로 알고 있었음

const person = {
  name : "doyeon"
}

person.name = "rowdy"

console.log(`${person.name} expected No error `)

//not super blocked const !! just check it

//concluse

//기본적으로 const를 사용해야 된다는 mind를 가지되,
//변수의 값을 overwrite 해야 한다면 let을 사용하는게 좋음.
