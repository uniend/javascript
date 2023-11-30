// 객체의 접근
 const superman = {
  name : 'mikle',
  age: 66,
 }

console.log(superman.age)
// 객체의 추가 
superman.hairColor = 'black';
console.log(superman);

superman['weight'] = 45;
console.log(superman);

// 객체의 삭제 
delete superman.weight
console.log(superman.weight) // undefined가 나와야한다. 

console.log(superman);

// 객체를 반환하는 함수 생성 
// 프로퍼티를 생성하는 함수
// 그 프로퍼티를 담는 변수 생성 


function exportFc(name2, age2){
  return {
    name2,
    age2, 
  }
}

const superman2 = exportFc('angle', 27);
console.log(superman2)





// 객체에  프로포티 유무 확인 --in 사용
console.log('age' in superman)

// 성인인지 아닌지 확인해주는 함수 생성 
// 객체 그자체를 보낸다. 
 const ankle = {
  name: 'ankle',
  age : 24,
 }

 const mini = {
  name: 'mini'
 }

 // age가 없는 경우도 true가 나온다. 이를 해결하기 
 function isAdult(user){
  if(!('age' in user) || user.age < 20){  
    return false
  }
  return true
 }
//  1. mini에 age가 없어서 undefined
// 2. undefined는 false 
// 3. 존재유무에 따라 ture false가 나오게 하는 in을 사용해야함 
// 4. 없으면 false가 나오는건 동일하기 떄문에 ! 를 사용해야함 
// 5. !('age' in user) 할 경우 생기는 문제 
// --> age 가 있으면 true가 나오고 반전되서 false가 된다 비교연산자는 false를 0으로 판단  0 < 20으로 ture가 되어 age가 있음에도 최종적으로 false라는 결과를 얻게된다. 따라서 기존 비교문도 유지해야하며, 둘중하나가 true면  ture를 반환하는 논리 연산자를 사용해야한다. 
 console.log(isAdult(ankle))  


// for in 사용하기 

for(x in ankle){
   console.log(ankle[x])
}