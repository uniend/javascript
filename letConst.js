console.log(a); //undeifned
                // 선언도 안됐는데 error가 안뜨는건 이뤄나선 안되는일 
                // 호이스팅 
var a = 5;
console.log(a);  //5


console.log(b);
let b =5;
console.log(b); // 5 
b = 6;
console.log(b);   //6 


const c = 7;
c = 8;  //error  