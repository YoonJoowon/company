//forEach
let numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => {console.log(num)})

//reduce
const num2 = [1, 2, 3]
let sum2 = 0;

num2.forEach(a => {sum2 += a},0) //6
console.log(sum2)

// 합계를 계속 누적해서 도출

//reduce2
const num3 = [1, 2, 3]
let sum3 = num3.reduce((acc, cur)=>acc+cur, 0)
console.log(sum3)

//reduce3
const arr = [1, 2, 3, 4]
const initialValue = 0;
const sum4 = arr.reduce((pre, cur)=>pre+cur, initialValue)
console.log(sum4)

const alphabets = ['a','b','c','a','c','b','b']
const counts = alphabets.reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur] +=1
        }
        else {acc[cur]=1}

        return acc;
    },{}
)
console.log(counts)

const names = ['a', 'b', 'b' ,'c' ,'a' ,'a' ,'c']
const result = names.reduce((acc, cur)=>{
        if(cur in acc){
            acc[cur]++
        }
        else{acc[cur]=1}
        return acc
    },{}
)
console.log(result)