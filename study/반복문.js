

// let i = 0;

// do{
//   console.log(i)
//   i++;
// }while(i<10)


// while(i<10){
//   console.log(i)
//   i++
// }
// 결과가 같아 차이점을 잘 알수가없다. 


// let condition = true;

// // while (condition) {
// //     console.log("이 라인은 실행되지 않습니다.");
// // }

// do {
//   console.log("이 라인은 한 번은 실행됩니다.");
// } while (condition);


// while(true){
//   let answer = confirm('계속 입력하시겠습니까?')
//   // flase가 들어왔을떄 상황처리르 하고싶을떄 ! 연산자 사용 
//   if(!answer){
//     break;
//   }
// }

// for(let i = 0; i < 10; i++){
//   if(i%2){
//     continue;
//   }
//   console.log(i)
// }


//숫자 맞추기 게임 만들기 
// 10번의 기회동안 맞추는 게임 
const SecretNum = 26;
let UserNum;
let attempt = 10;

let involved = confirm('이 게임은 숫자 맞추기게임입니다. 참여하시겠습니까?')

if(involved){
  let userName = prompt(`당신의 이름을 입력해주세요`)
  alert(`${userName}님 환영합니다 ${userName}님께는 ${attempt}만큼의 기회가 주워집니다. 해당 횟수내에 정답을 맞춰주세요`)
  UserNum = parent(prompt(`시스템이 지금 생각하는 숫자는 무엇인가 같나요? `, '숫자를 입력해주세요'))
  for(let i = 1; i <= 10; i++){
    attempt -= i;
    alert(`${userName}이 입력한 값은 ${UserNum}입니다. 잠시만 기다려주세요`)

    if(UserNum === 26 ){
      alert(`정답입니다!! 시스템이 생각한 숫자는 바로 ${SecretNum}입니다. 축하드려요`)
      break;
    }else{
      alert(`죄송합니다. 남은 도전기회는 ${attempt}입니다.`)
      continue;
    }
  }

}else{
  alert('아쉽습니다. 다음 기회에 만나요~ ')
}

// 내부로직틀렸네.. 내일 다시.. 

