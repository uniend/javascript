
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
// 제한사항 
//-50000 ≤ num1 ≤ 50000
// 50000 ≤ num2 ≤ 50000

function solution(num1, num2) {
  if((-50000 <= num1 && num1 <= 50000 )&&(-50000 <= num2 && num2<= 50000)){
    return num1 - num2;
  }else{
    const a = '-50000이상 50000이하의 숫자를 입력하세요';
    return a;
  }
}

const result = solution(7,2);
console.log(result);