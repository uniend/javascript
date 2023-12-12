// 배열의 삭제 

// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

const nums = [100, 200, 300, 400, 500];


//1번 pop() 

// nums.pop()
// nums.pop()
// console.log(nums)


// splice
// 시작인덱스 삭제할 갯수, 기존배열 수정 
// 삭제갯수 미입력시 끝까지 
// nums.splice(3)
// console.log(nums)


//slice 
//새로운 배열 생성 
// const newNum = nums.slice(0,3)
// console.log(newNum)


//filter
//새로운 배열 생성
//find와 유사하나 finde는 만족하는 첫번째 값만을 반환 따라서 배열을 반환하고 싶을떄는 filter 를 사용한다. 
//filter는 콜백함수를 매개변수로 사용한다. 

// 새로운 배열을 생성하는 메소드는 새로운 변수에 담아주기 
const NewNum = nums.filter((num)=>{
  return num < 400
})

console.log(NewNum)

