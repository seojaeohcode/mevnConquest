/*
객체 생성 방법
{}, new Object
성능 비슷함. 
*/
for (let i = 0; i < 1000; i++) {
    let a = {}
}

for (let i = 0; i < 1000; i++) {
    let a = new Object()
}