const arr = [1, 2, 3, 4];

const initialValue = 0;
const sum3 = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
);
console.log(sum3)

const arr1= [1, 2, 3, 4, 5]
const result = arr1.map(n=>n*3)
console.log(result)

const arr2= [1, 2, 3, 4, 5, 6, 7, 8]
const squared = arr2.map(n=>n*n)
console.log(squared)

const words = [
    {id:1, text:'hi'},
    {id:2, text:'hello'}
]

//

const texts = words.map(ab=>ab.text)
console.log(texts)

const numbers = [5, 6, 7]
numbers.map((num, index, array)=>{console.log(num*3, index, array)})

const customMap = (array, func) => {
        const result2 = [];
        for(let i = 0; i < array.length; i++){
            result2.push(func(array[i], i, array))
        }
    return result2;
}
customMap(numbers, (number, index, array)=> console.log(number*3, index, array))