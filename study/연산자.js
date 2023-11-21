// const explanation = '지금부터 "계산을" 해봅시다.';
// let A;
// let num = 10;

// alert(explanation);

// const Q1 = prompt(`num = num + 5, 해당 연산자를 줄여서 써보세요`);
// A = Q1;

// const check = confirm(`입력하신 값이 ${A}가 맞습니까?`);

// if (check) {
//   alert("축하합니다.");
// } else {
//   prompt("그대로 다시 입력해 주세요", "num += 5; ");
// }

// const explanation2 = '지금부터 "비교 연산자"를 연습 해봅시다.';
// let b = "문자열 1";
// let num2 = 1;

// alert(explanation2);
// const Q2 = prompt(
//   `${b}, 숫자 ${num2}이 false가 나올려면 어떤 비교 연산자를 써야하나요?`,
//   "==="
// );
// A = Q2;

// if (A) {
//   console.log(b === num2);
// } else {
//   alert("질문의 예시를 그대로 입력하세요. ");
// }

//논리연산자

const explanation3 = `지금부터 논리 연산자에 대해 학습해봅시다.`;
const readerName = "박지훈";
const readerAge = 27;
let name2;
let age;
let result3;

const Q3 = prompt(`당신의 이름을 입력해주세요`);
const Q4 = prompt(`당신의 나이는 몇살인가요? `);

if (Q3) {
  name2 = Q3;
  result3 = confirm(`당신의 이름이 ${name2}입니까?`);
} else {
  name2 = prompt(`당신의 이름을 다시 입력해주세요`);
  result3 = confirm(`당신의 이름이 ${name2}입니까?`);
}
// 취소눌렀을떄 처리도 해주고싶은데..

if (Q4) {
  age = Number(Q4);
  console.log(typeof age);
  result3 = confirm(`당신의 나이가 ${age}맞습니까?`);
} else {
  age = Number(prompt(`당신의 나이를 다시 입력해주세요`));
  result3 = confirm(`당신의 나이가 ${age}입니까?`);
}

alert(
  `감사합니다. ${name2}의 설문조사가 완료되었습니다. 관리자와 같은 지 확인 후 결과를 알려드립니다.  `
);

//논리연사자 활용
if (name2 === readerName && age === readerAge) {
  alert(`당신은 관리자가 맞습니다. 어서오십쇼`);
} else if (name2 === readerName || age === readerAge) {
  alert(`당신은 관리자가 아닙니다.`);
} else {
  alert(`접속을 금지합니다. `);
}
