// then으로 에러처리
const async1 = param =>{
    return new Promise((resolve, reject)=>{
        resolve(param*2)
    })
}

const async2 = param =>{
    return new Promise((resolve, reject)=>{
        throw "에러"
        resolve(param*2)
    })
}

async1(1).then(async2).then(result=>{
    console.log(result)
}, reason=>{
    console.log(`이 Promise는 이 ${reason}으로 종료됨.`)
})

// then으로 에러처리2
const async3 = param =>{
    return new Promise((resolve, reject)=>{
        resolve(param*2)
    })
}

const async4 = param =>{
    return new Promise((resolve, reject)=>{
        resolve(param*2)
    })
}

async3(1).then(async4).then(result=>{
    throw "에러"
    console.log(result)
}, reason=>{
    console.log(`이 Promise는 이 ${reason}으로 종료됨.`)
})

// catch로 에러처리
const async5 = param =>{
    return new Promise((resolve, reject)=>{
        resolve(param*2)
    })
}

const async6 = param =>{
    return new Promise((resolve, reject)=>{
        throw "에러"
        resolve(param*2)
    })
}

async5(1).then(async6).then(result=>{
    console.log(result)
    throw "에러"
}).catch(reason =>{
    console.log(`이 Promise는 이 ${reason}으로 종료가 되었습니다.`)
}).finally(()=>{
    console.log('이 로직은 Promise 이후에 무조건 실행되는 로직입니다.')
})