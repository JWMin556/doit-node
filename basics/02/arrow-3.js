// 매개변수가 있는 함수 표현식을 화살표 함수로 표현하기  (결과 비교 : 02\results\arrow-3.js)

// 함수 표현식
// let sum = function (a, b) {  //여기의 ab는 파라미터이구
//   return a + b;
// }
// console.log(sum(100, 200));  // 여기의 100,200은 argument 즉, 인수이다

// 화살표 함수
let sum = (a, b) => a + b;
console.log(sum(444, 453));
