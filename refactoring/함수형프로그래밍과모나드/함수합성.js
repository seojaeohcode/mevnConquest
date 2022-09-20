/* 
작은 순수함수들로 만들고 하나의 매개변수만 받도록 커링 
=> 함수를 합성
*/

const R = require('ramda')
const f_1 = R.map(a=>a+1)
const f_2 = R.filter(a=>a%2)
const ret = f_2(f_1([1,2,3,4]))
console.log(ret)

//ramda를 이용한 함수합성1(compose)
const ret2 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4)
console.log(ret2)

//ramda를 이용한 함수합성2(pipe)
const f_3 = R.pipe(R.negate, R.inc)
console.log(f(3))

//fx.js를 이용한 함수합성3(pipe)
const {map, filter, pipe} = require('fxjs')
const f_pipe = pipe(
    map(a => a+1),
    filter(a=>a%2)
)
const ret3 =