let arr = [1,'배열',[1,2,3,4],{red:'빨강', blue:'파랑'},function a(){return 'hi'}]

console.log(arr)
console.log(arr[3])
console.log(arr[4])

// 배열안에 배열 접근방법
console.log(arr[2][2])
console.log(arr[2][3])

// 객체
console.log(arr[3].blue)      
console.log(arr[3].red)

// 배열의 길이
console.log(arr.length)
console.log(arr[arr.length-5])
console.log(arr[arr.length-1]) //index 4 : funcion a(){return 'hi'}
console.log(arr[arr.length-3])

// 배열 push pop shift unshift splice concat
let rainbow = ['흰','노','초','검']
        
rainbow.pop()
console.log(rainbow)

rainbow.shift()
console.log(rainbow)

rainbow.unshift('빨','주')
console.log(rainbow)

rainbow.push('파','남','보')
console.log(rainbow)

// splice  배열에서 원하는 인덱스 값, 갯수를 삭제하거나 삭제하고 추가
rainbow.splice(1,2) // 1자리부터 2개 데이터삭제
console.log(rainbow)
rainbow.splice(3) // 3자리부터 뒤에 전체 삭제 (값 안쓰면 다 삭제 해버림)
console.log(rainbow)
rainbow.splice(1,2,'주','노') // 1자리부터 2개 데이터 삭제하고, 그 자리에 '주','노'가 추가됨
console.log(rainbow)

// concat  두개의 배열을 연결
const rainbow2 = ['초','파','남','보']
rainbow.concat(rainbow2)
const a = rainbow.concat(rainbow2)
console.log(a)

// indexOf('a') - 배열에서 (중복되는 a 데이터가 존재해도)처음으로 a라는 데이터가 발견되는 인덱스를 반환
const nature = ['sky','sea','tree','sky','sky']
// nature.indexOf('sky')
console.log(nature.indexOf('sky'))
console.log(nature.indexOf('mountain')) // indexOf 활용시 없는 데이터는 -1 반환

// lastIndexOf('b') - 배열이 중복되도 마지막에 있는 인덱스 값을 반환
console.log(nature.lastIndexOf('sky'))

// includes('c') - 배열에 들어가 있는 데이터는 true / 포함되지 않은 데이터는 false
console.log(nature.includes('tree'))
console.log(nature.includes('mountain'))

let array = [1, '배열', [1,2,3,4], {A:'a', B:'b', C:'c'}]

console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

let subjects = ['korea', 'english', 'math']
console.log(subjects)
console.log(subjects[0])

subjects.push('society')
console.log(subjects)

let fruits = ['apple', 'banana', 'tomato']
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
