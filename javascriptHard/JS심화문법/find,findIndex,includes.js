/*
find, findIndex 
배열 중에서 특정 조건에서 해당하는 요소를 찾을 때 사용

includes
배열에 어떠한 요소가 있는지 없는지 확인
IndexOf보다 성능이 훨씬 좋음.

인덱스를 반환할 경우 IndexOf보다 findIndex가 성능이 좋음.
*/

const condition = e => e.height >=180
const friends = [
    {"name" : "박종선", "height" : 173},
    {"name" : "연제호", "height" : 175},
    {"name" : "윤성용", "height" : 180},
    {"name" : "최주원", "height" : 190}
]

const mostTall = friends.find(condition)
const mostTallIndex = friends.findIndex(condition)
console.log(mostTall, mostTallIndex)

const a = [1,2,3,4,5]
console.log(a.includes(3))