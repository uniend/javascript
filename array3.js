let lee = {
  name: "이유경",
  age : 20,
  height: 190
}

// 일반객체는 이터러블한(순회가능한) 객체일까요 ? 

// [일반객체는 순회가능한 객체일까]
// 	-- 아니다. 
// 	-- 순회가능하다는건 이터러블이라는 속성(next())은 함수가 객체에 내장되어야 순회가 가능하다. 

// 이터러블한(순회가능한)  객체 
// 	- 순회가 가능한 객체 : 배열 

// 이터러블 객체의 반복문 
// 	- for 
// 	- forEach 
// 	- for in
// 	- for of 
// 	* for문의 가독성을 해결하기 위해 
// 	** 따라 일반객체는 순회가 불가하기때문에 for of 와 for each, for문은 사용불가하다

// [ 일반 객체를 순회하기 위해 사용하는 반복문 ]
// -- for in 

// 배열의 생성 
// 	-Array.from()
// 	-array.fill()


for ( const key in lee){
  console.log(key)
}


// 순회 가능한 객체에서 사용할 수 있는 반복문 
// Array, map,set, collection.... 
// 증감식과 조건식을 사용하지 않아도 된다. 
// 그뜻은 강제적으로 모든 요소를 순회해야한다. 

const arr = [1,2,3,4,5]

// 반드시 모든 요소를 순회해야하며 index가 필요할떄 
arr.forEach((el,index,orignArr)=>{
  console.log(el)
})

//for of 
//반드시 모든 요소를 순회해야하며 , 요소값에만 접근 가능 
for(const el of arr){
  console.log(el)
}


//for 
// 배열과 상관없다 
// 언제 사용하냐 ? 
// 내만대로 조건식, 증감식 설정 할떄 
// 모든 요소 순회가 아닌 일부만 순회할떄 사용 