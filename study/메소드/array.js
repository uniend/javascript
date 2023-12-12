// 새로운 객체 만들기 


let user = [
  { name : 'mike', age: 23},
  { name : 'angle', age: 66},
  { name : 'rice', age: 10},
]


let newUser = user.map((user, index) => {
  return Object.assign({},user,{
    id : index + 1,
    isAdult : user.age > 19
  });
})
console.log(newUser)


// 모든 수 합치기 

let arr  = [1,2,3,4,5]

let result = 0;
arr.forEach(num => result += num  )
console.log(result)


const result2 = arr.reduce((prev,cur)=>{ 
  return prev += cur
},0)
console.log(result2)


let student = [
  {name: 'mike', age: 23},
  {name: 'angle', age: 27},
  {name: 'rice', age: 20},
]

const AdultStudent = student.reduce((prev, cur) => {
  if(cur.age>19){
     prev.push(cur.name)
  }
  return prev
},[])
console.log(AdultStudent)


// 4글자 이름 골라내기 


const FourName = student.reduce((prev,cur) => {
  if(cur.name.length == 4){
    prev.push(cur.name)
  }
  return prev
},[])

console.log(FourName)