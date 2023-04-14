let leeyugyeong = {
  name : "이유경",
  age : 27,
  height : 100,
  hoby : "basceball"
}

let kimgsim = {
  name : "김경심",
  age : 69
}


//중첩 객체 

let famiiykim = {
  title : "이가네",
  user1: leeyugyeong,
  user2 : {
    name : "김경심",
    age : 69
  }
}

console.log(famiiykim.title)
console.log(leeyugyeong["hoby"])

//객체 데이터 수정 (재할당)
famiiykim.use1{
  name: "이다희"
}

console.log(famiiykim.user1);





let kong = new Object()  // 비어있는 객체가 생성  
// new 생성자 -->
// 자바스크립트는  object라는 틀를 통해 완전 히 다를 객체를 만들어내는것 

kong.name = "콩이"; // 없으면 추가
console.log(kong);

kong.name = "멍멍이";  // 있으면 수정 
console.log(kong);

kong.name = "콩이"; // 없으면 추가
const newobj = object.assign(famiiykim,kong);
 //  오브젝트를 두개 합칠때 겹치는 키값도 겹쳐 씌어진다. 