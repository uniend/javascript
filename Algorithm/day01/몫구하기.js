//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.


//제한사항
//0 < num1 ≤ 100
// 0 < num2 ≤ 100


//화살표 함수 이용 

const solution = (num1, num2) => {
  if((0 < num1 && num1 <= 100 ) && (0 < num2 && num2 <= 100)){
    return Math.floor(num1/num2)
  } else{
    return false;
  }
}

const result = solution(7,2);
console.log(result)