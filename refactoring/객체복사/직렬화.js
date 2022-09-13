/*
UNITY에서도 나오는 개념.
serialization / 역serialization
직렬화: 외부의 시스템에서도 사용할 수 있도록 바이트 형태로 데이터를 변환하는 기술을 말합니다. 
JSON 직렬화란 JSON Object를 JSON형태를 가진 문자열로 변환하는 것과
문자열을 JSON Object로 바꾸는 역직렬화를 아우릅니다.

직렬화: JSON object -> 문자열 JSON.stringify
역직렬화: 문자열 -> JSON JSON.parse
 */

const obj ={
    "이름": "큰돌",
    "나이": 27,
    "나이2": undefined
}
console.log(obj.이름)
const name = "이름"
console.log(obj[name])
console.log(obj['이름'])
console.log(obj['나이2'])