/*
자바스크립트는 유연한 언어이다.
함수를 호출할 때 인자 형식을 맞추지 않아도 에러가 나지 않는다.

함수의 인자보다 적게 함수를 호출할 경우, 넘겨지지 않은 인자에는 undefined 값이 할당된다.
인자 개수보다 많게 함수를 호출할 경우, 초과된 인수는 무시된다.

함수를 생성할 때, 런타임 시에 호출된 인자의 개수를 확인하고 
이에 따라 동작을 다르게 해줘야 할 경우가 있다. 이는 arguments 객체로 구현 가능하다.

자바스크립트에서는 함수를 호출할 때 arguments 객체가 함수 내부로 전달된다. 
arguments 객체는 함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체를 말한다. 
실제 배열이 아닌 유사 배열 객체이다.

arguments 객체는 3 부분으로 구성되어 있다. (__proto__ 프로퍼티 제외)
1. 함수를 호출할 때 넘겨진 인자 (배열 형태)
: 함수를 호출할 때 첫 번째 인자는 index 0, 두 번째 인자는 index 1 ...
2. length 프로퍼티
: 호출할 때 넘겨진 인자의 개수
3. callee 프로퍼티
: 현재 실행 중인 함수의 참조값 (예제에서는 add() 함수)

length 프로퍼티가 있어 배열과 유사하게 동작하지만 유사 배열 객체이므로 배열 메서드를 사용할 수는 없다. 
arguments 객체는매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나
전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 생성할 때 유용하다.
*/

function add(a, b) {
    // arguments 객체 출력
    console.dir(arguments);
    return a + b;
};

console.log(add(1)); // NaN
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 3
