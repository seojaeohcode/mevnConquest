// ESM
// 1번 export
// const s = 1
// export default s

// 2번 export
// export const s1 = 1
// export const s2 = 2
// export const s3 = a => a+2;

// 3번 export
// const b = 1
// const c = 2
// export default {b,c}

// CJS
exports.sayLove = name => `${name}아 사랑해`
exports.sayHi = name =>{
    console.log(this.sayLove("MEVN"))
    return `${name}아 안녕`
}

exports.value = 1

//이런 방법도 있음
/*
module.export = function(width){
    return{
        area(){
            return width * width
        }
    }
} 
*/ 