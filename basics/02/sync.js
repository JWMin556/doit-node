// 순서대로 실행하기  (결과 비교: 02\results\sync.js)

function displayA() {
    console.log('A');
}

function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback(); //이렇게 하면, 무조건 displayB함수를 다 끝내고 나서 파라미터로 받은 callback함수를 실행한다.
    }, 2000); // 2초 후에 실행하라
}

function displayC() {
    console.log('C');
}

displayA();
displayB(displayC); // 이렇게 콜백함수를 실행한다.

// JS는 시간이 걸리는 작업이 있을 경우 빨리 끝낼 수 있는 작업부터 하고 시간 걸리는 작업을 나중에 수행
// 왜냐하면 JS는 작업을 처리하는 쓰레드가 하나뿐이다 -> 즉, 동시작업이 되지 않는다.
// 즉, 비동기처리는 함수들이 서로 어떤 순서로 연결되어야 하는지를 직접 지정하는 것이다. 예를 들어 서버에서 데이터를 가져오고 클라이언트에게 화면을 보여줘야 하는데,
// 서버에서 데이터를 가져오는데 너무 오래 걸릴 경우, 일반적인 JS는 클라이언트에게 먼저 화면을 보여줄 것이다. 이러면 안되기 때문에 비동기 처리를 하는 것이다.
// 가장 많이 사용하는게 callback함수이다
