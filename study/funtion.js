//에러를 보여주는 함수 작성

// 1) 매개변수가 없는 함수
// function showError(){
//   alert(`에러발생 다시 입력해주세요 `)
// }

// showError();

// 2) 매개변수가 하나 있는 함수
// function showName(name){
//   let msg = `당신의 이름은 ${name}`
//   alert(msg)
// }

// showName(`닉쿤`);

// 매개변수가 있으나 매개변수를 전달하지 않을경우
// function  showName(name){
//   let msg = `hello`
//   if(name){
//     msg += name
//     alert(msg)
//   } alert(msg);
// }

// showName('mike');

// 함수 외내부 변수 사용 알아보기

// let msg = "안녕하세요";
// alert(msg); // 함수 사용전 msg 사용해보기

// function sayName(name) {
//   if (name) {
//     msg += name;
//     alert(msg); // 함수 내부서 외부에 사용된 변수 업데이트
//   }
// }

// sayName("마이크"); // 함수내부의 msg 호출해보기
// alert(`함수호출이후 msg "${msg}" 사용해보기 `);
// // 내부에서 업데이트낸 내용으로 함수 외부의 변수가 변경되었음을 확인할 수 있다. 




// let msg = '전역변수'
      
//       console.log(msg) 

//       function sayMsg(name){
//         // let msg = '지역변수'
//         console.log(msg + '' + name)
//         console.log(name)  
//       }

//       sayMsg('입니다.')
//       // sayMsg(); 해당 값을 전달하면 undefined
//       console.log(msg)



// function sayName(name){
//   let msg = name || 'replaceName'; // ||은 마지막 ture를 반환 
//   console.log(msg)
// }
// sayName();
// sayName('Mike')



// function sayName(name = 'defaultName'){
//   let msg = `hello ${name}`
//   console.log(msg)
// }
// sayName();
// sayName('Mike')



// function add(num1,num2){
//   return num1 + num2 
// }

// let result = add(1,2);
// console.log(result);



// function showError(){
//   alert('이 함수오류가 발생했습니다.')
//   return;
//   alert('이 부분은 절대 실행되지 않습니다.');
// }

// const result = showError();
// console.log(result)




// 함수 호이스팅 비교해보기 
// sayHello();

// function sayHello(){
//   console.log('hello')
// }



sayHello();

const sayHello = function(){
  console.log('hello')
}
