// 1.변경이 일어나는 컴포넌트를 셀렉한다. 
// 2. 클릭되는 곳에 이벤트를 넣는다. 

// 버튼을 누르면 배경색과, 글자가 랜덤으로 변한다. 
// 이벤트 등록 버튼 


const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const Color = document.querySelector('.color');

btn.addEventListener('click',()=>{

  const randomIndex = getRandomIndex(); //랜덤으로 변경 필요 
  document.body.style.backgroundColor = colors[randomIndex];
  Color.innerHTML = colors[randomIndex];
  
})


const getRandomIndex = () => {
  return Math.trunc(Math.random()*colors.length)
}