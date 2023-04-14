/*
  문제 
  010-1234-1234를 피라미터로 전달받아
  010- ****-1234로 파싱하는 함수를 정의 

  input 값
    010-1234-1234

  output 값
  010-****-1234

  operates
  전화번호의 중간 갑을 1234로 바꾸어야한다. 

  keyword 
   특정 집단의 특정 부분을 바꿀 수 있는 알고리즘 

  1.replace
  2.splice
  3. split 
*/



/*한글 설계  */

// splice를 사용해서 내가 원하는 인덱스 번호를 찾아서 고치기 
// split를 사용해 배열을 나누고 원하는 인덱스를 찾아 재할당하기 

// 기능을 만드는것 
// 전달받는 인자 이름 정하기 
// 인자로 해야할 기능 적기 


function paserPhone2(phone){
  const arr = phone.split('-')
  arr[1] = "****"
  return arr.join('-')
}