// 사고 싶은 과일 물어보고 가격 알려주기 


const Fruit = {
  apple : 3600,
  banana : 6000,
  melon: 500,
  Watermelon:7000,
  Kiwi : 1000,
  Strawberry : 1000
}

let userFruit;

let FQA = prompt(`사고 싶은 과일 이름을 알려주세요`, `판매중인 과일은 사과, 바나나, 멜론, 키위, 수박,딸기뿐입니다.`)




switch(FQA){
  case '사과' : 
    alert(`사과의 가격은 ${Fruit.apple}입니다.`)
    break;
  case '바나나':
    alert(`바나나의 가격은 ${Fruit.banana}입니다.`)
    break;
  case '멜론' : 
    alert(`멜론의 가격은 ${Fruit.melon}입니다.`)
    break;
  case '수박' : 
    alert(`수박의 가격은 ${Fruit.Watermelon}입니다. `)
    break;
  case '딸기' : // 이렇게 하면 같은 실행문이 실행된다.
  case '키위' : 
    alert(`키위의 가격은 ${Fruit.Kiwi}입니다. `)
    break;
  default : 
    alert(`판매하지 않는 상품입니다.`)
  }