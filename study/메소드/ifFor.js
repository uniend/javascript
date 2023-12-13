// . while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

// [ 문제 풀이 ]
// let num = 0;

// while(num < 10 ){ // 0은 false값으로 판단됨으로 비교문을 작성해야한다. 
// 	let arr = [];  // while문 안에 작성할경우 반복될때마다 배열이 초기화된다. 따라서 외부에 선언해야한다.  
// 	if(num % 2 == 1){
// 		arr.push(num);
// 		console.log(num.sort((a,b) => b - a )); // sort는 배열메소드임으로 num에 사용할 수 없다. 
// 	}else{
// 	  num++
// 	}
// }


// [ 수정한 코드 ]

// let num = 0;
// let array = [];

// while(num < 10){
// 	if(num % 2 == 1){
// 		array.push(num)
// 	}
// 	num++;
// }

// console.log(array.sort((a,b) => b -a ))

// 2. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
// for/ 비교문/ 합을 구하기 위한 것: reduce(), --> 배열의 메소드 


// [ 방법 1]
// let arr = []

// for(let i = 0; i < 10; i++){
// 		arr.push(i)
// }

// let result = arr.reduce((prev, cur)=> prev += cur )
// console.log(result);


//방법 2 




// 3. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// 총합 : reduce , for문, forEach 
// 반복의 한계가 정해짐 : for 
let arr2 = [];
for(let i = 1; i < 20; i++){
	if(!(i%2 === 0 || i%3 === 0)){
		arr2.push(i)
		
	}
}

let result2 = arr2.reduce((prev, cur)=>{
	return prev += cur
},0)
console.log(result2)

// 4. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let num = 0;
for(let i = 1; i < 20; i++){
	if(i % 2 === 0 || i % 3 ==0){
		num += i
	}
}
console.log(num)

// 5. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
// 중첩, 총합, while 
// 주사위는 0이 없다 두개르 던졌을 경우니 6이 포함x 


let result3 = []

for(let i = 1; i < 6; i++){
	for(let j = 1 ; j < 6; j++){
		if(i+j === 6){
			result3.push([i,j])
			console.log(i,j)
		}
	}
}

console.log(result3)



