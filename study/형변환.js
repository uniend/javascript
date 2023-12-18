



// --> 숫자형끼리의 계산 숫자형 도출 
// const korea = 60;
// const earth = 40;
// const result2 = (korea +earth )/2  // 50
// console.log(result2) // 50 





// // 자동형변환 
// const math = prompt('수학점수를 입력하세요')  // 30 
// const english = prompt('영어점수를 입력하세요')  // 30 
// const result = (math + english) / 2   // 30 
// console.log(result)  // 1515 가 도출 

// // --> prompt  결과값은 문자형으로 도출 
// // --> 문자형 + 문자형은 결과값도 문자형이기 떄문에 3030으로 숫자가 이어져 나온다. 
// // --> 하지만 결과값이 1515가 된 이유는 /로 인해 자동형변환되어 정상적으로 숫자결과처리가 되었다. 




// console.log(
//   3,
//   String( 3),
//   String(true),
//   String(false),
//   String(null),
//   String(undefined),
//   Number("1234"),
//   Number("1234gksrmf"),
//   Number(true),
//   Number(false),
//   Number(null),
//   Number(undefined),
//   Boolean(0),
//   Boolean(""),
//   Boolean(null),
//   Boolean(undefined),
//   Boolean(NaN),
// )





let UndefinedValue;
console.log(UndefinedValue + 10) // NaN
console.log(Number(undefined)) // NaN
console.log(UndefinedValue + '10') // undefined10 // +연산자의 경우 하나라도 문자열일시 문자열
console.log(String(undefined)) // undefined
console.log(UndefinedValue + true) // NaN
console.log(Boolean(undefined)) // false


console.log('여기서부터는 null')
let NullValue = null;
console.log(NullValue + 10) // 10 
console.log(Number(null)) //0








