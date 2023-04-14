
/*
//설계력을 요구하는 문제 
// 자판기라는 함수를 정의 
// 자판의 함수는  처음에 실행되었을떄 자판기가 기동되었습니다 추력 
// 자판기 함수의 파라미터로는 coin, menu
// 자판기 함수의 반환 값은 
// 잔돈이 0이면 음료수 이름을 반환
// 잔돈이 있으면 음료수 이름과 잔돈을 반환 
// 음료수보다 금액이 적을 경우 금액이 부족합니다 .반환 
// 없는 메뉴를 파라미터로 전달했을 경우 존재하지 않는 상품입니다. 반환 

// 메뉴 
// 술먹는 : 300원 
// 바타 500 : 500원
// 콜라 :  1000원 


  함수 명 : Vending machine
  1. 기능 : 인자로 받은 값에 따라 결과 값을 출력 
  2. 메뉴데이터 베이스 필요 
  4. 잔돈 
  5. 사용자가 입력한 메뉴와 일치하는 메뉴데이터 베이스의 가격의 저장공간
  6. 자판기 기동 
  7. 비교 후 반환 
  

*/


function vendingMachine(coin, product){

  let menu ={
    눈먹는 : 300,
    비타500 :  500,
    콜라 :  1000
  }

  // "300원" --> 원x ---> parsint(300) 형변환 
  let change;
// 배열을 사용하지 않은 이유 
//  사용자에게 받는 정보는 키값인데 배열은 인텍스 번호로 접근 해야하기때문에 객체보다 검사하기가 더 어렵다. 
  let coinMenu = menu[product]; //r검사 + 가격 검사하기 

  // 예외처리 
  // early return 
  // 예외 상황떄 빠르게 해당 함수를 종료하여 아래 로직을 실행하지 않기 위함 
  if(!coinMenu) return console.log("없는 제품입니다.")
  if(coin < coinMenu ) return console.log("잔독 부족")

  // 로직 
  change = coin - coinMenu;

  if(chagne === 0 ) return console.log(product);
  console.log(product, change)




  } 

vendingMachine(300,"비타 500 ");


// output 과 input 생각하기 
// out --> 음료수(파라미터에 있음)/ 잔돈(반환해야하니깐 변수생성)
// input --> coin product(집단에 메뉴검사 필요--> 객체)

// 

/*
  문제2 
    010-1234-1234를 파라미터로 전달받아 
    010- ****-1234로 파싱하는 함수를 정의 
*/