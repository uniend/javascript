

let age = 30; 

// 함수 블록 스코프내에 age란 변수가 없어 전역변수를 가져다 사용 
function showAge(){
  console.log(age)
}

showAge();



let hoby = 'baseball';
// let hoby; 
// 함수 스코프밖 전역스코프에서 hoby를 선언할경우 에러가 발생한다. 
function showSports(){
  // 스코프 차이가 있을경우 같은 이름이 선언되지 않는 let이라도 같은 이름을 사용가능하며, 블록스코프내에 있는 변수를 사용한다. 
  let hoby = 'soccer';
  console.log(hoby)
}

showSports()


// let의 호이스팅 

let name = 'mike';

function showName(){
  console.log(name) 
  // let과 const의 경우 스코프내에서 할당이전에 변수 사용이 불가하도록 막혀있다. 
  
  let name = 'angle'
}

showName();