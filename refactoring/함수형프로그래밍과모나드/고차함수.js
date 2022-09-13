/* 
고차함수
함수가 다른 함수를 매개변수로 받아서 어떤 로직을 생성하는 함수
고차함수 = 함수를 값 자체로 다른 함수에 넘길 수 있는 일급 객체여야만 가능.
JS는 일급객체가 함수(클래스x)
1.변수나 메서드에 함수를 할당할 수 있어야함.
2.함수 안에 함수를 매개변수로 담을 수 있어야함.
3.함수가 함수를 반환가능해야함.
*/

//map
const a = (a) =>{
    return a+10
}

const b = [1,2,3].map(a)
console.log(b)

//_call
const _call = (a,b) => a() + b()

//함수반환 함수
const c = val => () => val
/*
function c(val){
    return function(){
        retrun val
    }
}
*/
const a_lazy = a(12010)
console.log(a_lazy())