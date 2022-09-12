/*
Promise all 
A B C D를
ABC 한꺼번에 실행 => D실행
이럴 때 promise all 사용 
*/

const async = (message, ret)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(message)
            console.log(new Date())
            resolve(ret)
        },2000)
    })
}

const promises = [async("비동기함수1발동", 1),async("비동기함수2발동", 2)]

Promise.all(promises).then(data=>{
    console.log(data)
})