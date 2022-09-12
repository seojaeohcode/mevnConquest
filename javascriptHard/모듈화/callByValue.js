/* 
call by Value
자바스크립트는 함수의 매개변수로 넘길 때
어떤 값들, 참조형, 기본형으로 넘기든
call by value로 넘겨지게 됨.
=>전달된 매개변수가 복사됨.
기본형 => 함수 바깥의 변수와 상관없이 동작
참조형 => 객체의 주솟값이 복사 => 넘긴 매개변수의 객체 속성값이 변경되면 함수 바깥의 변수도 변경
*/

// b1을 null로 만드는 게 아니라 주솟값의 복사본 즉 또 다른 주솟값에 null 할당 
// 원본엔 영향이 없음.
const f1 = obj => {
    obj = null
}
let b1 = {"a":1}
f1(b1)
console.log(b1)
const f2 = array => {
    array = null
}
let b2 = []
let a2 = b2
f2(b2)
console.log(b2)

const swap = (a,b) =>{
    let temp = a
    a = b
    b = temp
}

let x = 1
let y = 2
swap(x,y)
console.log(x,y)

// 108p 복습필요
const a = {"a" : 1}
const b3 = c => c.a = 2
b3(a)
console.log(a)

/*
참조형(reference type):객체, 배열, 함수, 날짜, 정규표현식(RegExp)
기본형(primitive type):숫자, 문자열, 불리언, null, undefined, symbol
*/