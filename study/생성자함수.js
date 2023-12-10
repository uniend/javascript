

// 생성자 함수를 이용하여 객체를 생성하기 
// object는 기본을 내장된 생성자 함수이기 떄문에 new 키워드 없이도 빈 인스턴스를 생성한다. 

/*
const item1 = new Object()
console.log(item1) // {} 

const item2 = Object()
console.log(item2)  // {} 

item1.price = 3000;
item1.name = '사과';
item1.sayitem = function(){
  console.log(`제품의 이름은 ${this.name}이며 가격은 ${this.price}입니다.`)
}

console.log(item1)
item1.sayitem()
*/

// 다양한 함수로 생성자 함수 생성해보기 

// 1.  화살표 함수 
// const Item = (title, price) => {
//   this.title = title;
//   this.price = price; 
//   this.sayItem = function(){
//     console.log(`이 제품은 ${this.title}이며, 가격은 ${this.price}입니다.`)
//   }
// }

// const itme1 = new Item('사과',3000);
// itme1.sayItem()


// // // 함수 표현식 
// const Item = function(title,price){
//   this.title = title;
//   this.price = price;
//   this.sayItem = function(){
//     console.log(`이 제품은 ${this.title}이며, 가격은 ${this.price}입니다.`)
//   }
// }

// const itme1 = new Item('사과', 3000)
// itme1.sayItem()


// 함수 선언문 

function Item(title,price){
  // 내부의 주석이 생략되어있다. new가 생략될 경우 주석코드가 자동으로 실행되지 않아 반환문이 없음으로 undefined를 반환한다. 
  // this = {} ; 
  this.title = title;
  this.price = price;
  this.sayItem = function(){
    console.log(`이 제품은 ${this.title}이며, 가격은 ${this.price}입니다.`)
  }
  // return this 
}

// const itme1 =  Item('사과', 3000)
// console.log(itme1)// undefined


const itme1 =  new Item('사과', 3000)
itme1.sayItem() // 이 제품은 사과이며, 가격은 3000입니다.