const a = (c="네이버")=>{
    return new Promise((resolve, reject)=>{
        throw new Error("[큰돌에러]")
        reject(new Error("[큰돌에러]"))
        reject("[큰돌에러]")
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
}).catch(e=>{
    console.log(`${e}라는 에러발생`)
})