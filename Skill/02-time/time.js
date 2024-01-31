const clockTitle = document.querySelector(".js-clock");

// setInterval(changeMsg, 2000); // 특정시간마다 실행
// setTimeout(changeMsg, 3000); // 특정시간이 흐르고 딱 한번 실행
// new Date 는 숫자형
// .padStart(원하는 문자갯수, 값) // 문자열에만 붙여쓸수있음

// 시간대 계산하기
// 메소드를 제외한 연산을 통한 시간 게산은 밀리초로 결과값이 나온다.
// 1초는 1000 밀리초
// 데이를 계산하기 위해서는 계산된 시간 나누기 하루
// 시간계산은 계산된 시간과 하루를 나눈 나머지의 값을 시간과 나누기
// 분 계산은 계산된 시간과 시간을 나눈 나머지의 값을 분과 나누기
// 초 계산은 계산된 시간과 분을 나눈 나머지의 값을 1초와 나누기

// 여기서 1초가 1000이면,
// 1분은 60초가 60번 임으로 1000 * 60
// 1시간은 1분이 60분임으로 1000 * 60* 60
// 하루는 한시간이 24번임으로 1000 *  60 * 60 * 24

function Clock() {
  const date = new Date();
  const Christmas = new Date("2024-12-25");
  const time = Christmas - date; // number

  const day = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  clockTitle.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

Clock();
setInterval(Clock, 1000);
