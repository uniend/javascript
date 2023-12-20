
// 초기 조건이 거짓이면 실행안함주의 
// 구구단

// for(let i = 1; i <=1; i++){
//   for(let j = 1; j <= 9; j++){
//     console.log(`${i}, ${j}`)
//   }
// }

// 두개의 주사위를 던져 두개의 합이 6이되는 모든 경우의 수를 출력하시오

// for(let i = 1; i <= 6; i++){
//   for(let j =1; j <= 6; j++){
//     if(i + j == 6){
//       console.log(`${i},${j}`)
//     }
//   }
// }

// let conunt = 0;
// do{
//   console.log(conunt)
//   conunt++;
// }while(conunt < 3)

// 별찍기

// 1. 삼각형 출력하기 - pattern1

// [출력 이미지]
// // 높이(line)가 5
// *
// **
// ***
// ****
// *****

// let star = ''; //빈 문자열 선언
// for(let i = 0; i < 5; i++){ // i가 5번 번실행
//   star += '*'; // 0일  떄 별 하나, 1일떄 별두개, 2일떄 별세개, 3일때 별4개, 4일떄별 5개
//   console.log(star + '\n') // 0일떄 출력하고 줄바꿈, 1일때 출력하고 줄바꿈, 4일떄 별 5개까지 진행해서 모양도출
// }

// //중첩 if문 사용
// for(let i = 0; i < 5; i++){ //반복문 5번 실행
//   let star = ' '// 한번 할때마다 별 초기화
//   for(let j = 0; j < 5; j++){ // 한 줄별별로 반복할 코드
//     star += '*'; // 한줄에 5번 실행  결국 총 5개 담기게 된다.
//   }
//   console.log(star + '\n') // 한줄에 5개씩 실행후 줄 바꿈 정사각 모양
// }

// 2. 삼각형 출력하기 - pattern2

// [출력 이미지]
// *****
//  ****
//   ***
//    **
//     *

// for(let i = 0; i < 5; i++){
//   let star = '' // 한줄마다 초기화
//   let space = '' // 한줄마다 공백 초기화
//   for(let k = 0; k < i; k++){
//     space += ' '
//   }
//   for(let j = 5; j > i; j--){
//     star += '*';
//   }
//   console.log(space+star + '\n')
// }

//문자열의 조합 위에서 아래까지  공백이 늘어나는갯수, 별이 줄어드는 갯수

// 3. 삼각형 출력하기 - pattern3

// [출력 이미지]
// *****
// ****
// ***
// **
// *

// for(let i = 5; i > 0; i--){
//   let star = '' // 한줄마다 초기화
//   for(let j = 0; j < i; j++){
//     star += '*';
//   }
//   console.log(space,star + '\n')
// }

// 4. 삼각형 출력하기 - pattern4

// [출력 이미지]
//     *
//    **
//   ***
//  ****
// *****

// for (let i = 1; i <= 5; i++) {
//   let star = "";
//   let space2 = "";
//   for (let j = 5; j > i; j--) {
//     space2 += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     star += "*";
//   }
//   console.log(space2 + star + "\n");
// }

// 5. 정삼각형 출력하기 - pattern5

// [출력 이미지]
//     *
//    ***
//   *****
//  *******
// *********


// 반복 5개 
// 공백 4에서 0으로 
// 별 1개서 9개로 
// for(let i = 1; i <= 5; i++){
//   let star = '';
//   let space = '';
//   for(let j = 5; j > i; j--){
//     space += ' ';
//   }
//   for(let j = 0; j < 2*i-1; j++){
//     star += '*'
//   }
//   console.log(space + star+ '\n')
// }


// 6. 역정삼각형 출력하기 - pattern6

// [출력 이미지]
// *********
//  *******
//   *****
//    ***
//     *

// 줄 5번 반복
// 공백 0 에서 5로 
// 별은 9에서 1로 
// 곱하기를할떄는 i는 0으로 시작x


// for(let i = 5; i > 0; i--){
//   let star = '';
//   let space = '';
//   for(let j = 5; j >= i; j--){
//     space += ' ';
//   }
//   for(let j = 0; j < 2*i-1; j++){
//     star +='*';
//   }
//   console.log(space + star+ '\n')
// }


// 7. 다이아몬드 출력하기 - pattern7

// [출력 이미지]
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// let star = '';
// let space ='';


// for(let i = 1; i<= 4; i++){
//   let star = '';
//   let space ='';
//   for(let j = 5; j >= i; j --){
//     space += ' ';
//   }
//   for(let j = 0; j < 2*i-1; j++){
//     star += '*';
//   }
//   console.log(space + star+ '\n')
// }
// for(let i =5; i > 0; i--){
//   let star = '';
//   let space = '';
//   for(let j = 5; j >= i; j--){
//     space += ' ';
//   }
//   for(let j = 0; j < 2*i-1; j++){
//     star += '*'
//   } 
//   console.log(space + star+ '\n')
// }

// 8. 별찍기 심화 - pattern8

// [출력 이미지]
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// 54321
// 0 2 4 6
// 

for(let i = 5; i >= 0; i--){
  let star = '';
  let star2 = '';
  let space = '';
  let space2 = ''
  for(let j = 0; j < i; j++){
    star += '*';
  }
  for(let j = 5; j > i; j--){
    space += ' ';
  }
  for(let j = 5; j > i; j--){
    space2 += ' ';
  }
  for(let j = 0; j < i; j++){
    star2 += '*';
  }
  console.log( star+ space +space2+star2+ '\n')
}
