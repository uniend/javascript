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



// sayHello();

// const sayHello = function(){
//   console.log('hello')
// }


// 에러를 보여주는 함수를 한수 선언문, 함수 표현식, 화살표 함수 3가지 경우로 작성해보기 

// 함수 선언문 

// showError();

// function showError(){
//   console.log('에러발생!!')
// }


// 함수 표현식 

// const showError = function(){
//   console.log('에러 발생!!')
// }

// showError();


//화살표 함수 

// const showError = () => console.log('에러 발생!!')
// showError();


// // 이름을 찾는 함수 화살표 함수로 변환 

// const sayName = name => {
//   let msg = `hello ${name}`
//   console.log(msg)
// }

// sayName('mike');



// 함수를 활용하여 게임만들기 
// 문제를 내는 함수
// 정답을 체크하는 함수 
// 정답이면 다음 문제 넘어가기 
// 실패면 4번 재도전 
// 모든 문제 끝나면 게임종료 

const screatNum ={
  'one' : 1,
  '이치' : 1,
  '이거' : 1,
  '우노' : 1,
}

let attempt = 4;



// 문제를 내는함수 

function problem(QaNumber){
  let answer;
  switch(QaNumber){
    case 0 :
      answer = prompt(`해당 ${screatNum.one} 가 어떤 숫자를 나타내는지 맞춰주세요`)
      checking(answer)
      break;
    case 1 :
      answer = prompt(`해당 ${screatNum.이치} 가 어떤 숫자를 나타내는지 맞춰주세요`)
      checking(answer)
      break;
    case 2 :
      answer = prompt(`해당 ${screatNum.우노} 가 어떤 숫자를 나타내는지 맞춰주세요`)
      checking(answer)
      break;
    case 3 :
      answer = prompt(`해당 ${screatNum.이거} 가 어떤 숫자를 나타내는지 맞춰주세요`)
      checking(answer)
      break;
    default : 
      alert(`문제를 모두 소진하였습니다.`)
  }
}
// 정답을 체크하는 기능을 하는 함수 
const checking = function(userAnswer){

}
// 실패하면 기회 4번이 반복되는 함수 
const reTry = () => {}



let QA = confirm('숫자 맞추기 게임을 시작하시겠습니까?')

if(QA){
  alert(`게임을 시작하겠습니다. 당신에게는 한문제당 총 ${attempt}만큼의 기회가 주어집니다.`)
  for(let i = 0; i < 4; i++){
    if(i === 0){
      problem(i)
    }else if(i === 1){
      problem(i)
    }
    else if(i === 2){
      problem(i)
    }
    else if(i === 3){
      problem(i)
    }
  }

}else{
  alert('아쉽네요, 다음기회에 만나요! ')
}


// 객체를 배우기 
// 정답을 체킹하는 함수 작성
// 전역변수에 담아
// if문에서 정답이면 게임종료
// 실패면 4번반복함수에서 반복시키고 실패면 그대로 게임종료 정답을 4번에 맞추면 2번문제로 넘어가게 진행 