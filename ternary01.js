// if문 vs 삼항연산자 비교 = 더 쉽게 바꿈

// 1-1. if문
let array = [1];
let text = "";

if(array.length===0){
    // if(array.length=0) -> if(0)이기 때문에 (대입연산자) false조건중의 하나 이므로 "array배열안에 요소들이 존재!" 로 실행이 됨
    text = "array 배열은 빈 상태!"
}
else{text="array 배열안에 요소들이 존재!"}

console.log(text)

// 1-2. 삼항연산자 (조건식 : 연산공식)
let array2=[];
let text2 = array2.length===0 ? "array 배열은 빈 상태!" : "array 배열안에 요소들이 존재!";

console.log(text2);

// 2-1. 삼항연산자 (조건식 : 매개변수)
function trueOrFalse(isMember){
    return(isMember ? '참' : '거짓');
}
// false로 판단하는 종류
console.log(trueOrFalse(true))
console.log(trueOrFalse(11234))
console.log(trueOrFalse(false))
console.log(trueOrFalse(2))
console.log(trueOrFalse(0))
console.log(trueOrFalse(""))
console.log(trueOrFalse(null))
console.log(trueOrFalse(-0))










