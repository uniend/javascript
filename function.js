funtion add(num1,nu2){
  const result = num1 + num2
    console.log(result);
}

add(1,2); // 3
console.log(add(1,2)) //undeifined 

funtion add2(num1,nu2){
  const result = num1 + num2
  return  console.log(result);
}

add2(3,4); //7 
console.log(add(3,4)) // 7

funtion printname(name){
  console.log(name)
}

printName("김성용");
printName("이성욜");
printName("김성용3");
// -->> 각 값 정상출력 
// --> 값을 재사용 할필요가 없음 