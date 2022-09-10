// new Promise 대기
// resolve 이행
// then(function(resolveData)) 결과값 받아오기 -> 결과값:resolveData

const a = (c="네이버")=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사랑`)
        },1*1000)
    })
}

a().then(ret => {
    console.log(ret)
    return a(`카카오`)
}).then(ret=>{
    console.log(ret)
})