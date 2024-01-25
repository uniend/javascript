// 색상코드를 직접 생성하기
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 1. 변수생성
// 색상코드를담을 변수
// 버튼을 담을 변수
// 변경되는 숫자 컴포넌트

// 동작
// 버튼을 누르면 이벤트 실행
// 배경색 변경이된다.
// 글자가 변경이 된다.

// 색상코드를 담는 방법
// 기본적으로  #은 들어가야한다.
//#34324 식으로 총 숫자 6개가 들어가야한다. --> 반복문 혹은 reduce 메소드
// 배열의 인덱스 값이 들어가야한다. --> 인덱스를 넣을 수있는 함수 필요
// 인덱스값을 랜덤으로 선정되어야한다.  -랜덤 메소드 활용

let btn = document.querySelector("#btn");
let Color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    // 6번 호출해서 6개의 랜덤번호 받아오기
    hexCode += hex[getrandomHex()];
  }

  document.body.style.backgroundColor = hexCode;
  Color.innerHTML = hexCode;
});

//랜더번호로 인덱스 번호 생성하기
const getrandomHex = () => {
  return Math.trunc(Math.random() * hex.length);
};
