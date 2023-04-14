const arr1 = [1,6,2,4,3,5]
arr1.sort();
console.log(arr1)
// 이친구는 정렬이 되고 


const arr2 = [50,3,100,200,40000]
arr2.sort();
console.log(arr2)
// 애는 정렬이 안되는이유 

// _--> 유니코드 때문에 
// ---> sort는 유니코드를 기반으로 한다. 
// ---> sort는 숫자도 유니코드 형식으로 읽어서 위와같은 문제 발생
// --> 따라서 이를 방지하기 위해 콜백함수가 사용된다. 

const arr3 = [50,3,100,200,40000]
arr3.sort( (a,b) => (a-b));
console.log(arr3)