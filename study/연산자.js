const explanation = '지금부터 "계산을" 해봅시다.';
let A;
let num = 10;

alert(explanation);

const Q1 = prompt(`num = num + 5, 해당 연산자를 줄여서 써보세요`);
A = Q1;

const check = confirm(`입력하신 값이 ${A}가 맞습니까?`);

if (check) {
  alert("축하합니다.");
} else {
  prompt("그대로 다시 입력해 주세요", "num += 5; ");
}

const explanation2 = '지금부터 "비교 연산자"를 연습 해봅시다.';
let b = "문자열 1";
let num2 = 1;

alert(explanation2);
const Q2 = prompt(
  `${b}, 숫자 ${num2}이 false가 나올려면 어떤 비교 연산자를 써야하나요?`,
  "==="
);
A = Q2;

if (A) {
  console.log(b === num2);
} else {
  alert("질문의 예시를 그대로 입력하세요. ");
}
