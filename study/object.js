// 객체의 접근
const superman = {
  name : 'lee',
  age: 24,
}

console.log(superman.name)
console.log(superman['age'])

console.log(superman.hairColor)

// 객체의 추가 
superman.hobby = 'sing';
superman['hairColor'] = 'black';
console.log(superman)

// 객체의 삭제 
delete superman.hairColor;
console.log(superman);

// 객체를 반환하는 함수 생성 
// 프로퍼티를 생성하는 함수
// 그 프로퍼티를 담는 변수 생성 





// 객체에  프로포티 유무 확인 --in 사용
// 성인인지 아닌지 확인해주는 함수 생성 
// for in 사용하기 