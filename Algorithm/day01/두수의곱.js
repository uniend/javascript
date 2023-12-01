
//정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

// 표현식 함수 사용해보기 ! 


//제한사항
//0 ≤ num1 ≤ 100
// 0 ≤ num2 ≤ 100

//solution

const solution = function(num1,num2){
let answer = (0 <= num1 && num1 <= 100)&&(0 <= num2 && num2 <= 100) ? num1 * num2 : '0과 100사이의 값을 입력하세요'
return answer; 
}


const result = solution(7,3)
console.log(result);
