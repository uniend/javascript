
// 어떤게 키가 될지 모르는 객체를 만들떄 

const makeObject = function(key,value){
  return {
    [key] : value,
  }
}

const result = makeObject('나이', 23);
console.log(result)
const result2 = makeObject('이름', '카이므');
console.log(result2)

// 객체 복사 안되는 사례 확인해보기 
// 원본과 복사 객체 모두 변경되어버림 
// 그 이유는 두 객체가 모두 하나의 객체주소를 공유 하고 있기 떄문 
const person = {
  name: '마이크',
  age: 23.
}

const person2 = person;
person2.name = '루이스'
console.log(person)
console.log(person2)


// 객체 메소드 복사하기 
const person3 = Object.assign({},person)
person3.name = '마이크'
console.log(person3)

// 객체 메소드 키 배열로 반환하기 
const result3 = Object.keys(person3)
console.log(result3)

// 객체메소드  프로퍼티 값 배열로 반환하기 
const result4 = Object.values(person2)
console.log(result4)

// 키와 값을 배열로 반환하기 
const result5 = Object.entries(person)
console.log(result5)