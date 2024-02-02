// js에서 html을 생성 후 html에 넣기
const images = ["img01.jpg", "img02.jpg", "img93.jpg"];

// 인덱스 번호 랜덤생성
const randomIndex = images[Math.floor(Math.random() * images.length)];

// html 요소 생성

const HtmlImg = document.createElement("img");

document.body.append(HtmlImg); // append 뒤에 오게 /  prepend는 앞에 
console.log(HtmlImg);
HtmlImg.src=`image/${randomIndex}`;