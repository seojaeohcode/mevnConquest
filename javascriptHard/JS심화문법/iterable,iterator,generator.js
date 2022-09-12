/*
iterable
어떤 요소들을 순회하며 쉽게 탐색할 수 있는 자료구조를 말함.
JS => 이터러블 프로토콜이라는 규칙을 준수한 객체
규칙 = Symbol.iterator 메서드를 가짐.
Symbol.iterator는 next()라는 메서드를 가진 객체 반환
next()메서드는 value와 done 프로퍼티를 가짐.
value = yield한 값, done = return 유무
대표적으로 배열은 Symbol.iterator 메서드를 가짐.
*/
const a = ["사과","딸기","포도","배"]
// 배열 a가 이터레이터 키를 갖는가 => in을 사용해 검사
console.log(Symbol.iterator in a) // true
// for a of b는 이터러블한 객체를 순회할 때 사용
/*  
const a = ["사과","딸기","포도","배"]
for(let i = 0; i<a.length; i++){
    console.log(a[i])
}
*/
for(const b of a) console.log(b)

//map 또한 이터러블한 자료구조 
//key value를 할당해 key를 통해 value를 끌어냄
let mp = new Map()
mp.set("사과", "딸기")
mp.set("포도","배")
console.log(mp.get("사과"))
//it이 mp를 순회
for(const it of mp) console.log(it)
console.log(Symbol.iterator in mp)



/* 
iterator
이터러블한 것 => 이터레이터 반환가능
이터레이터 = 순회할 떼 쓰는 포인터
이터러블에서 값을 뽑아낼 때 사용.
*/

const fruit = ["사과","딸기","포도","배"]
const ite = fruit[Symbol.iterator]()
//ite의 next메서드 => 이터러블 순회 => 
//value done속성을 가진 이터레이터 객체 반환
//for a of b = next를 작동시키며 탐색 
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())



/*
제너레이터 = 이터레이터를 쉽게 만들 수 있는 함수
함수 자체가 이터러블하며 커스텀한 이터러블을 만들 때 사용
function*

yield할 때 조건문으로 값의 추출유무 결정
함수가 return을 하면 다른 함수가 종료되듯 종료됨.
next메서드로 yield값을 value에 담음.
next로도 되지만 ...(객체확장 연산자로) value만 추출가능

제너레이터 안의 yield는 이터러블의 값
=자신이 만들고 싶은 값.
*/

const log = console.log
function* gen(){
    yield 10
    if(false) yield 20
    yield 30
    return 90
    yield 30
}

let iter = gen()
console.log(iter)
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

console.log([...gen()])

// generator => Array.prototype.map 구현
// 기존 map
const log2 = console.log
const add = a => a+10
const arr = [1,2,3]

const ret = arr.map(add)
log2(ret)

// 제너레이터로 구현
function *map(f,list){
    for(const x of list){
        //f 함수로 list를 순회하면서 값을 바꾸고 yield시킴(데이터생성).
        yield f(x)
    }
}

log2(map(add,arr))
log2([...map(add,arr)])

// 제너레이터를 이용한 코루틴(coroutine)
const log3 = console.log
function *map2(f,list){
    for(const x of list){
        //f 함수로 list를 순회하면서 값을 바꾸고 yield시킴(데이터생성).
        yield f(x)
    }
}

const add2 = a => a+10
const arr2 = [1,2,3]
const customGenerator = map(add2,arr2)
log(customGenerator.next())
log('어떤 로직 1')
log(customGenerator.next())
log('어떤 로직 2')
log(customGenerator.next())

/*
코루틴
함수의 작동 시점을 자유자재로 구현하는 것.
이전으로 갈 수 없고 한 방향인 뒤로만 넘겨줄 수 있으면
=세미 코루틴이라고 함.

제너레이터에서 코루틴의 작동원리
1.yield 문이 있는 해당 값을 제너레이터 객체가 그 부분에 해당하는
스택프레임(매개변수, 로컬변수, 실행위치)을 저장해둠.
2.동시에 자바스크립트의 콜스택에서는 해당 스택프레임을 제거
3.next() 메서드가 발동하면 스택프레임을 복원해 실행함.
*/

//이터러블/이터레이터 프로토콜
const log4 = console.log
function* gen2(){
    yield 10
    if(false) yield 20
    yield 30
    return 90
    yield 30
}
let iter2 = gen2()

log4([...iter2])

iter2 = gen2()

for(const y of iter2){
    log4(y)
}

// 제너레이터 지연평가
/* 
지연평가 => 파이프라인에서 제너레이터로 연결된 함수들이 
합쳐지는 듯한 효과를 내서 성능향상에 도움이 됨.

fxjs사용
함수형 프로그래밍
_.go 즉시실행 pipe함수 함수합성을 해서 즉시 실행
_.map 새로운 배열은 반환 어떤 가공도 하지 않는다.
_.filter 홀수인 요소만 있는 배열을 만듭니다.
_.take 그중 2개를 추출

이터레이터는 next()메서드로 yield로 반환하는 값을 꺼내지않는 한 작동하지 않는다.
그래서 map filter take함수가 합성되어 이터레이터를 넘기고
마지막 take에서 yield되기 전까지는 작동하지 않아 함수들이 합성되는 효과를 가지며 
요소들을 하나씩 검사할 수 있는 것.
*/

const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const num = [1,2,3,4,5,6,7,8]
const ret2 = _.go(
    num,
    _.map(num=>num),
    _.filter(num=>num%2),
    _.take(2)
)

console.log(ret2)

const ret_lazy = _.go(
    num,
    L.map(num=>num),
    L.filter(num=>num%2),
    L.take(2)
)

console.log([...ret_lazy])