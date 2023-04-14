/*
 
객체의 속성 값이 함수 일 경우 일반 함수와 구분하기 위해 메소드라 부른다. 
--> 객체 프로포티로 사용된 함수는 메소드라 부른다. 
 */

const printService = {
  on(){
    console.log("실행되었습니다. ") // 가장 많이 쓰는것 
  },

  off: function(){
    console.log("종료되었습니다.")
  },

  ready: () => {
    console.log("준비되었습니다.")  // this 문제 때문에 잘쓰지 않는다.
  }
}

printService.on()
printService.off()
printService.ready()
// --> on,off, ready라는 키 값에 함수를 넣은것 
// --> 메소드라 불느다. 

 /* 비슷한 속성의 함수들을 하나의 객체로 묶어서 한번에 관리하기 위해  */