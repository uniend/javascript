let num1 = 100;
let num2 = 50;

function f1(){
  console.log(num1)
  function f11(){
    let num2 = 100;
      console.log(num1,num2)
  }
  f11()
}

function f2(){
  num1 = 250; 
}

function f3(){
  let num1 = 100;
  let num3 = 50;
  num1 = 300;
  console.log(num1)
}

/* 스코프 : 안에 값이 없으면 위로 올라간다  언제까지 값이 나올떄까지  */

// 전역 변수 --> 지역스코프 안에 변수명 사용가능 
// 실행부에서 변수를 활용하는게 아니라 return 사용 할 필요 없음
// 없을 경우 한단계 올라가서 값을 받아 오는 원리이며 
// 우선순위가 지여 변수가 높기 때문에 전역변수의 값이 지역 변수의 
// 값으로 바뀐다. 
//--> 반환되서 ㅇ재할당 값이 바뀌다기보다는 지역변수의 운선순위가 
// 높아서 할당되는것 


console.log(num1) // 100  --> 맨위의 100 
f1();  // 100 , 100 100
f2(); //
console.log(num1) //250
f3(); //300
console.log(num1) //250 
console.log(num3)  //error  