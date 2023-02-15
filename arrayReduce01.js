//forEach
let animal = ['rat', 'cat', 'kingkong']
animal.forEach(ani => {console.log(ani)})

const num = [1,2,3,4]
let sum = 0;
num.forEach( a => {sum += a})
console.log(sum)
// sum = 0
// sum = 0 +1
// sum = 0 +1 +2
// sum = 0 +1 +2 +3 >>>> 걔속해서 누적되면서 값 도출 sum +=a 는 sum = sum+a 줄인 것

//reduce
const aa = [1,2,3,4]
let bb = aa.reduce((acc, cur) => acc+cur, 0)
                    //1. accumulator 파라미터에 초기값 0이 우선 들어간다.
                    //2. current 파라미터에 배열데이터를 하나씩 받아준다.
                    // 즉 1,을 받아서 실행코드 돌고 계속 2,3을 하나씩 받아준다.
console.log(bb)

//reduce 혼자해보기
const num2 = [1,2,3,4,5]
const zero = 0;
const sum2 = num2.reduce((a,b) => a+b , zero)
console.log(sum2)

//forEach 혼자해보기
const num3 = [1,2,3,4,5]
let sum3 = 0;
num3.forEach( b => {sum3 += b})
console.log(sum3)

//reduce 예제
const numbers = [1,2,3,4,5]
const average = numbers.reduce((e,f,ind,arr) => e+f/arr.length, zero)
console.log(average)

const numbers2 = [1,2,3,4,5]
const average2 = numbers2.reduce((c,d,index,array) => {
    if(index===array.length-1){return(c+d)/array.length} // if는 인덱스랑 배열-1 이랑 같기전까지 계속 리턴만 반복재생
    return c+d;
},0)
console.log(average2)

const alphabets = ['a','a','b','a','c','c','d','f',3]
const count = alphabets.reduce((acc, cur)=>{
    if(acc[cur]){ // 'a' 라는 데이터가 있다면 다음을 실행
    acc[cur] += 2 //acc[cur] = acc[cur]+2
    }
    else{ acc[cur] = 2}
    return acc;
} , {}) // 초기값은 {} 로 객체화 한다. 데이터는 비어있는 상태
console.log(count)

const names = ['messi','messi','son','son','ronaldo','son','son','messi']
const dong = names.reduce((acc, cur)=>{
    if(cur in acc){
        acc[cur]++
    }
    else{acc[cur] = 1}
    return acc;
}, {})
console.log(dong)