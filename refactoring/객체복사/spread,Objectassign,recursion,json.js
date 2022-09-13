/* 
객체 복사
스프레드 연산자(...) vs Object.assign
이 둘은 깊이가 1단계일 때까지만 유효하다.

JS에서 객체를 다룰 때는 원본이 변화되지 않도록 복사하고 로직을 구현해야함.
=> JS는 객체를 함수를 통해 넘길 때 call by value형식을 취하기 위해 
메모리의 이점을 노리지 않는 이상 깊은 복사(deep copy)를 통해 
원본객체를 안전하게 복사하는 방법을 취하는 게 좋습니다.
*/

//case 1(1.스프레드복사 2.Object.assign으로 복사) 
const a = {"b": 1}
let b = {...a}
let c = Object.assign({},a)
c.b = 3
b.b = 3
console.log(a) //{b: 1} 원본객체 무사함

//case 2(깊이가 2단계 이상)
/* 
2단계 이상의 깊이에선 원본자체가 변해버림
*/
const d ={
    "b" : 1,
    "c" : {
        "d" : 2
    }
}
let e = {...d}
let f = Object.assign({},d)
f.c.d = 3
console.log(d) //{b: 1, c: {d: 3}}

/* 
level 2이상의 깊이를 가진 객체는 재귀와 json.parse(json.stringify())를 통해야만 한다. 
특정한 방법이 꼭 우세한 것은 아니고 상황에 따라 성능테스트를 해야한다.
*/

//case 3(재귀함수)
// 재귀를 사용하여 객체를 새롭게 만들면 원본에 영향을 주지 않는 방향으로 설계가 가능하다.

const copy = o =>{
    let out = {}
    let value, key
    for(key in o){
        console.log("key:" + key)
        value = o[key]
        console.log("o[key]:" + o[key])
        out[key] = (typeof value === "object"&&value != null)?
        copy(value) : value
    }
    return out
}

const g = {
    "b":1,
    "c":{
        "d":2
    }
}

let h = copy(g)
h.c.d = 4
console.log(g)

//case 4(JSON.parse & JSON.stringify) 
const i = {
    "b":1,
    "c":{
        "d":2
    }
}
let j = JSON.parse(JSON.stringify(i))
j.c.d = 4
console.log(i)