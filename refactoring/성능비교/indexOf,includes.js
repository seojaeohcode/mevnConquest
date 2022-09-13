/* 
어떤 요소가 들어있는지 확인할 때
indexOf vs includes
includes가 indexOf보다 82%더 빠름.
*/

let a = ["홍철", "윤찬", "강우"]
if(a.includes("강우")) return true
if(a.indexOf("강우")!=-1) return true