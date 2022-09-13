/*
JSON.stringify()는 3가지의 매개변수를 받을 수 있음.
JSON.stringify(value, replacer, space)
*/

const a = {
    "name": "주홍철",
    "tall": 173
}

//ex1
const ret = JSON.stringify(a,null,3)
console.log(ret)

//ex2
const replacer = (key, value) => {
    return (typeof value === 'string' ? undefined : value)
}
const ret2 = JSON.stringify(a,replacer,3)
console.log(ret2)
