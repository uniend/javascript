// const : 중복선언 불가, 수정불가, 주로 상수
// prompt : 결과 값을 문자열로 받아 숫자일경우 숫자로 변환시켜주는 로직이 필요함
//정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요

// 값을 리턴하는 함수선언문 생성
// 함수 선언문은 평가과정에서 선언과 동시에 함수가 할당되어 호이스팅이 발생함

// 제한사한
// -50,000 ≤ num1 ≤ 50,000
// -50,000 ≤ num2 ≤ 50,000

function soltuion(num1, num2) {
  if ((-50000 <= num1 && num1 <= 50000) && (-50000 <= num2 && num2 <= 50000)) {
    num1 + num2;
  } else {
    const A = "숫자범위는 -50,000에서 50,000임으로 다시입력해주세요";
    return A;
  }
}

let result = soltuion(2, 7);
console.log(result);
