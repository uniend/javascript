//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.


//제한사항 
//0 <numer1, denom1, numer2, denom2 < 1,000

//분수의 표현, 소수로 변환하여 진행 

//분모  denom1 denom2
//분자 numer1 numer2
// 덧셈을 할려면 분모를 통일 시켜야함 
// 분모를 통일 시킬 수 있는 방법은 ? --> 최소공배수 --> 분모를 서로 곱해주고 분자를 더해주면 되네 
// 분자르 더하기 
// 최소공부수/더한분자의 숫자의 최대공배수 구하기 
// 최대공배수로 두 숫자를 각각 나누기 
// 그 값을 배열에 넣기 ' 


function solution(numer1, denom1, numer2, denom2) {
  if((0 < numer1 && numer1 <= 1000)&&(0 < denom1 && denom1 <= 1000)&&(0 < numer2 && numer2 <= 1000)&&(0 < denom2 && denom2 <= 1000) ){
    let denom = denom1*denom2;
    let numer = (numer1*denom2) + (numer2*denom1)
    let sameNum = Math.trunc(denom/numer)
    denom = denom/sameNum
    numer = numer/sameNum
    const result=[];
    result.push(denom,numer)
    return result
  }else{
    return '다시 입력해주세요'
  }
}

const result2 = solution(1,2,3,4)
console.log(result2)