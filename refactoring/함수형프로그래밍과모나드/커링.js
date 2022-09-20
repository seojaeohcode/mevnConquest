/* 
어떤 함수의 예상되는 여러 개의 매개변수보다 적은 수의 매개변수를 받아서
매개변수가 완전히 채워지지 않는 함수가 실행되지 않고 넘겨지다 모든 매개변수가 채워지면 그때서 실행하는 기법
=> 함수의 합성을 좀 더 유연하게 할 수 있고 무인수프로그래밍이 가능해짐.

커링이 가능한 이유: 외부함수의 컨텍스트가 소멸되어도 내부함수가 외부함수의 실행환경을 잠조할 수 있는 클로저 때문.

ramda.js => 함수형 프로그래밍을 도와주는 라이브러리
*/

const R = require('ramda')
const a = R.add(1)
const b = a(2)
console.log(b)

const addFourNumbers = (a,b,c,d) => a+b+c+d
const curriedFourNumbers = R.curry(addFourNumbers)
const f = curriedFourNumbers(1,2)
const g = f(3)

//커스텀 커링
const curry = fn => a => b=> fn(a,b)
//ES5
var curry2 = function(fn){
    return function(a){
        return function(b) {
            return fn(a,b)
        }
    }
}

const f1 = curry2((a,b)=>a+b)
const f2 = f1(1)
const ret = f2(2)
console.log(ret)

//fxjs curry 
//export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)