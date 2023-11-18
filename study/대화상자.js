// prompt는 디폴트값을 넣을 수 있다.

// const city = prompt('지금 살고있는 도시를 입력하세요', '대한민국')
// //alert('당신의 도시는 + city + 입니다.')  // 이 코드의 오류 ?  -> 변수도 "" 문자 리터럴로 감싸져서 자동형변환 되어서 city가 출력됨
// // alert('당신의 도시는 ' + city + '입니다.')
// alert(`당신의 도시는 ${city} 입니다.`)



// 결과 값의 boolean을 이용 
const city = confirm("지금 당신이 살고있는 도시는 대한민국입니까?");
console.log(city)

if (city) {
  alert("대한민국에 오신걸 환영합니다. ");
} else {
  const recity = prompt("당신이 살고있는 도시는 어디입니까?", "ex)"); // prompt의 결과값은 문자열과 null, 문자열은 truty임으로 if문의 조건문으로 활용이 가능 
  console.log(recity)
  if (recity) {
    alert(recity + "에 오신걸 환영합니다. ");
  }
}
