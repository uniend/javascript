// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 화살표 함수 

const solution = (num1, num2 ) => {
  if((0 < num1 && num1 <= 100 )&&( 0 < num2 && num2 <= 100)){
      return Math.trunc(num1/num2*1000)
  }else{
    const a  = '0과 100사이의 값을 입력하세요'
    return a;
  }
}

const result = solution(3,2)
console.log(result)


// 중요 포인트! 
// Math.floor()는 소수점을 내림한다. ex) Math.floor(23.3) = 23, Math.floor(-23.3) = -24가 된다. 음수인 경우도 생각해서 소수점을 이하 수를 없애고 싶을때는 Math.trunc를 사용하는 것이 좋다.

// 즉 
// 소수점내리기는 floor,  소수점버리기는 trunc 