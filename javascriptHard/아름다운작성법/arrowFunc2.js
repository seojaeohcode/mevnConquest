function arrow() {
    setTimeout(()=>{
        console.log(this)
    },1000)
}

function not_arrow() {
    setTimeout(function(){
        console.log(this)
    },1000)
}
const p1 = new not_arrow()
const p2 = new arrow()

console.log(p1)
console.log(p2)