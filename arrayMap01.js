const arr=[1,2,3,4,5]
const result = arr.map(p=>p*p)
console.log(result)
console.log(arr)

const rorcp = [{id:1, password:'hello'}, {id:2, password:'byebye'}]
const rorcpPerfect = rorcp.map(a=>a.password)
console.log(rorcpPerfect)

//map (value, index, array)
const arr1 = [12,3,7,5]
arr1.map((value,qwerqwer,asdasd)=> console.log(value*3,qwerqwer,asdasd))
const abb = arr1.map(a=>a*2)
console.log(abb)

// const customMap = (x,y) => {x+y}
const customMap = (array, func) => {
    const result = [];
    for(let i=0; i<array.length; i++){
        result.push(func(array[i],i ,array))
    }
    return result;
}
//호출 cuntomMap(데이터1, 데이터2)
customMap(arr1, (number, index, array) => console.log(number*3, index, array))

//find
let todo = [
    {id:1, text:'JS study', done:true},
    {id:2, text:'html study', done:false},
    {id:3, text:'Css study', done:true}
]
let index = todo.findIndex(todo => todo.id===2) //1
console.log(index) //todo는 객체{id:~, text:~, done:~}하나를 받는중
let todos = todo.find(todo => todo.id===3)
console.log(todos) 
let todos2 = todo.find(todo => todo.done===false)
console.log(todos2) 

//filter
const tasksDone = todo.filter(todo=>todo.done===true)
console.log(tasksDone)
const tasksNotDone = todo.filter(todo=>!todo.done)
console.log(tasksNotDone)