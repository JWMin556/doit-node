// 아래 함수 표현식을 화살표 함수로 바꾸기  (결과 비교 : 02\results\arrow-1.js)

// 함수 표현식
// let hi = function() {
//   return '안녕하세요?';
// };

// 화살표 함수
// let hi = () => {
//     return '안녕하소!';
// };
// 위의 형태가 일반적이지만, 만약 한줄뿐이고 return문이라면... 아래처럼 할 수 있다
let hit = () => '안녕히ㅏ!';
console.log(hit());
