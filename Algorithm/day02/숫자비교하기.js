//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요. 


// 제한사항
//0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

// 함수 표현식으로 하기 
const solution = function(num1, num2){
  if(( 0 <= num1 && num1 <= 10000)&&(0 <= num2 && num2 <= 10000)){
    return num1 === num2 ? 1 : -1 
  }else{
    return '다시 입력해주세요'
  }
}

const result = solution(5000,99)
console.log(result)