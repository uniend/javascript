const users = [
  {
    id:1,
    name: "김예슬"
  },
  {
    id:2,
    name: "이지형님"
  },
  {
    id:3,
    name: "홍윤기님"
  }
]

// 기존배열을 사용해 새로운 배열을 반환 
const newUser = users.map( (users, index) => {
  return{
    id: users.id,
    name: users.name,
    nick: '성용이와 아이들$(index+1)'
  }
})

// 내가 원하지 않는 데이터를 제외한 새로운 배열을 반환 
const filterUser = users.filter((users)=>users.id !== 3)
console.log(filterUser)


//첫번째 배열
const findUser = users.find( (users)=> users.id === 1)
console.log(findUser)


// 0 
const findUserIndex = users.findIndex( (users)=> users.id === 1)


// reduce 누적

const numArr = [1,2,3,4,5,6,7,8,9]

// sum: 누적값, n: 현재요소값 
let result = numArr.reduce( (sum, n, index, orignArr ) =>{
  return sum + n
},5)

// 이니셜벨류 ? 
// reduce의 끝에는 기본값을 부여할 수 있는데 
// 현재 코드에서는 기본 값을 5를 부여했다. 만약 기본값을 5를 부여했을떄 처음 n의 값은 5가 된다. 
// 그 이ㅜ로 부터는 배열의 요소를 그대로 가지고 온다. 
// 그러나 기본값이 없다면 배열의 첫 요소를 n으로 부여한다. 

//이니셜벨류 넣어줬을때 
// sum 0  n = 5로 시작해서 첫바뀌때 5 
// 없으면 원본배열을만을 돌린다 생각하면된다. 


const product = [
  {
    id:1,
    produceName : "컴퓨터",
    status : 0
  },
  {
    id:1,
    produceName : "노트북",
    status : 1
  },
  {
    id:1,
    produceName : "자동차",
    status : 0
  },

]

// 플래그 겁사와 값이 있는지 없는지 검사할때 사용한다. 
// every
const result2 = product.every( (product => product.status === 0));
// 모든 요소가 0이 아니기때문에 fasle 반환 


// some 
const result3 = product.some((product => product.status === 0));
// 일부 값은 0이인가 . 

//이 둘은 검사용으로 많이 사용된다. 