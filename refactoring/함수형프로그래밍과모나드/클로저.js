/* 
클로저란 외부함수의 실행 컨텍스트가 소멸해도 스코프 프로퍼티가 가리키는 외부함수의 실행환경을 참조할 수 있는 것.
*/

/* 
클로저1
JS는 private 변수가 존재하지 않는데 즉시실행함수와 클로저를 이용해 private변수를 구현 가능.

getValue를 통해서만 count의 값을 확인 가능.
*/
const test = (function(){
    let count = 0;
    return{
        increase(){
            count++
        },
        decrease(){
            count--
        },
        getValue(){
            console.log(count)
        }
    }
})()
test.increase()
test.increase()
test.increase()
test.getValue()

/* 
클로저2
counter라는 변수가 어떤 행위에 이어서 실행.
내부함수에서 참조할 수 있는 클로저로 남아있어 계속해서 더하기가 가능.
*/
const add = (function(){
    let coutner = 0
    return function(){
        counter+=1
        return coutner
    }
})()

console.log([add(),add(),add()])

/* 
클로저3
D3.js에서의 사용
*/

function center(scale){
    var offset = Math.max(0, scale.bandwidth()-1)/2
    if(scale.round()) offset = Math.round(offset)
    return function(d){
        return +scale(d)+ offset
    }
}