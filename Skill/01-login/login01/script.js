// form을 사욯할경우 더이상 click 이벤트는 필요가 없다 엔터를 통해서 form이 자동 제출된다.
// 자동제출 될떄 새로고침이 발생하며 정보가 서버로 전송된다. 
// 서브밋 하는 순간에 브라우저가 새로고침하지 않고 정보를 저장하도록 해야한다.


// 함수뒤에 ()의 의미 / 브라우저가 즉시 실행시킨다. 
//()안에 공간을 만들어주면 브라우저가 알아서 '방금 일어난 일에 관한 ' 정보를 넘겨준다. --> event 


const loginForm = document.querySelector('.div-login');
const logininput = document.querySelector('.div-login input');

function handleLogin(event){
  // 내용을 저장하는것은 자주 사용하는것이며, 브라우저가 무료로 저장할 수 있느 공간을 제공한다. : local stroage 
  // 저장하기 :  localStorege.setItem('저장할 값의 이름(키)', '저장할 값(vlaue)')
  // 저장한 값을 불러오기 : localStorege.getItem('저장할 값의 이름(키) ')
  // 삭제하기 : lovalStorege.removerItem('저장한 값의 이름')
  event.preventDefault();
  const userName = logininput.value;
  console.log(userName);

}


// 브라우저가 이벤트를 담아서 실행해줄것 
loginForm.addEventListener('submit', handleLogin);
