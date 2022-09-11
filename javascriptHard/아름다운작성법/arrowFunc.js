// ES5
function ES5() {
    return 1
}
// ES6
/* 
화살표함수 
생성자 함수로 사용불가
arguments를 지원하지 않는다.

한 줄
() => value(return 구문 필요x)

여러 줄
() => {
    return..
}
*/
const ES6 = () => 1

console.log(ES5());
console.log(ES6());