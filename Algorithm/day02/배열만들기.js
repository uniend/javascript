//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

//제한사항
// //-10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000





function solution(numbers) {
  if(1 <= numbers.length && numbers.length <= 1000){
    for(let i = 0; i < numbers.length; i++){
      if(-10000 <= numbers[i] && numbers[i] <= 10000){
          numbers[i] = numbers[i]*2
      }else{
        return '숫자범위가 다릅니다.'
      }
    }
    return numbers
  }else{
   return '다시 입력하세요'
  }
}


solution([1, 2, 100, -99, 1, 2, 3])

