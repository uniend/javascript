const arr = [] 
arr[1] = "1";
arr[3] = 3;
console.log(arr.length); 
// 정답 : 4 
//자바스크리트의 배열은 사실 객체 
// 따라서 배열이 빈 값을 넣을 수 있다.  ---희쇄열 허용 
//length 는 객체의 프로퍼터 
// 함수는 기능을 만드는건데 길이는 기능x 
// 배열이 가진 여러 데이터중 하나의 데이터 이름이니깐 
// 객체가 아닌 배열을 사용하는 이유중 하나는 
// 순서가 중요한 객체가 필요한기 떄문 
// 인덱스 1, 3이라면 0과 2가 자동으로 빈값이 채워져야한다. 

// "empth", 1, "empth", 3


const arr2 = ["김성룡", "이유경", "이다희"]

if(arr2.indexOf("이유경")){
  arr2.push("예슬님")
}

// idex0f 이유경이 있냐?
// 있다. = 인덱스 값 1
// if(참) 실행 
// .push 현재 배열에 끝에 예슬님을 추가하라 
// "김성룡", "이유경", "이다희", "예슬님"

if (arr2. index0f("김경심")){
  arr2.push("예슬님")
}
// 김경심이 없기 때문에 실행되서는 안되지만
// index0f는 못찾을 경우 -1를 반환 
// 값이 있기때문에 참이되어 실행된다. 
// 따라서 배교등호를 사용해야함 


if (arr2. index0f("김경심") >= 0){
  arr2.push("예슬님")
}


/*split */
const phone = '010-1234-1234'  // ["0","1","2", .....]
//문자열도 배열과 유사한 기능을 한다. 
//유사 배열 배열과 관련된 기능을 사용할 수 있따. 
console.log(phone.length) //13

//하이픈 제거 
phone.replace("-", "")
phone.split('-') // ['010','1234','1234']
phone.split('-').join('') ---> 1234567 
// split은 나누고 join은 합치고 
phone.split('-').join(ㅎ) // 010ㅎ1234ㅎ1234 
// join 합치는데 그사이에 문자르 넣는것 


// 내장함수 
const arr3 = [1,2];
arr.push(4,5) // 1,2,4,5

// concat  // 배열끼리 합칠때 
const arr4 = [1,2];
const arr5= [4,5];

const result = arr4.concat(arr5)
//1,2,3,4
// 뒤에 붙일때  

//페이지네이션 번호목록을 누르는거 
//인피니티스크롤 --> 계속 다음 데이터 요구할때 무한 스크롤 
// 인피니티 ㅡ크롤 할때 concat을 많이 사용한다. 

//pop 
const arr6 = [1,2,3,4,5]
const deleteEl = arr6.pop()
console.log(deleteEl, arr6) // 5, 1234 


//shift , unshift 
const arr7 = [1,2,3,4]
arr7.unshift(5) /
console.log(arr7)  // 5 1 2 3 4
arr7.shift() 
console.log(arr7) // 1 2 3 4 

//slice 
const apart = ['이','유','경','이','유']
console.log(apart.slice(1,4))  // 유경이 
console.log(apart.slice(3)) // 끝까지 
console.log(apart.slice(-4,-1)) //  맨 우측 : -1부터 표기 --> -4가 첫번째  
                              // 유 경 이  -1은 맨끝이라 그전 까지 
console.log(apart.slice(-3)) // 경이유 


/* 100page (페이지 네이션 )-->slice 
[[1~ 10] [ 10 ~ 20 ] [ 20 ~ 30 ]]
  index1   index 2     index 3 
*/
   

//splice 
 const deleteArr = apart.splice(1,4, ["김", "경", "심"])
 console.log(deleteArr, appart)
 //  유 경 이 유  , 이 [김 경 심] --> 배열 안에 배열 다차원 배열 

 // 다차원 배열 접근 방법 

console.log("apart[1]", apart[1][1])


console.log("apart", apart)  // 이 [김 ,경, 심]
console.log("apart[1]", apart[1]) // [김, 경 , 심 ]
console.log("aprart[1][1]", apart[1][1]) 김 