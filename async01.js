// 비동기에 대하여
// 비동기적 처리 : 상단의 코드가 실행되면서 결과와 상관없이 다음 코드가 실행하는 방식

// 예제1

console.log(1);
setTimeout(()=>{
    // setTimeout 3초뒤에 실행하겠다
    console.log(2);
}, 3000);
console.log(3);

// 예제2
function work(){
    setTimeout(()=>{
            const start = Date.now();
            for(let i = 0; i<1000000000; i++){
            }
            const end = Date.now();
            console.log(end-start+'ms');
        }, 0) // 실제는 0이 아니라 4 브라우저상 계산되는 방식
}

console.log('처음 작업!');
work();
console.log('다음 작업!');