//arr.map(callback(currentvalue[, index [, array]]), thisArg)
const arr = [1, 2, 3, 4, 5]
const squared = arr.map(n=>n*n)
console.log(squared)


let todos = [
    {id:1, text:'JS study', done:true},
    {id:2, text:'html study', done:false},
    {id:3, text:'Css study', done:true}
]

let index = todos.findIndex(todo => todo.id===3)
console.log(index)

let todo1 = todos.find(todo1 => todo1.id===3)
console.log(todo1)

let todo2 = todos.find(todo2 => todo2.done===false)
console.log(todo2)


const tasksDone = todos.filter(todo => todo.done)
console.log(tasksDone)

const tasksNotDone2 = todos.filter(todo => todo.done === false)
console.log(tasksNotDone2)

const tasksNotDone = todos.filter(todo => !todo.done)
console.log(tasksNotDone)