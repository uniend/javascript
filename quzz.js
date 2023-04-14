

/*
c출력값 :  00님의 학점은 00이다. 
필요한 것 : 학점 이름 

학점의 조건 __ 4과목의 평균
값에따라 분기가 나눠진다. 

abcf 

연산에필요한 값 
이름 
평균 
학점 
4가지 과목 
*/ 



let name  = "이유경";

let ko = 80;
let math = 70;
let eng = 30;
let tem = 69;


let avg = (ko+math+eng+sc)/4;
let greade;

if(avg>= 90){
  greade = "a"
}else if(avg>=80){
  greade = "b"
}else if(avg>=70){
  greade = "c"
}else{
  greade = "f"
}

console.log(grade);
console.log( ${김성용}님의 이번 학기 성적은 ${grade}입니다.);
