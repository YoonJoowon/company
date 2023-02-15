let obj = { discount: -1000, book: { title: 'JS basic', price: 20000 } }
//객체는 keyName을 가지고 value데이터를 아래처럼 가져온다
console.log(obj.discount)
console.log(obj.book)

// 1. 객체안에 객채 접근방법 : 점 표기법
console.log(obj.book.price)

// 1. 객체안에 객채 접근방법 : 문자열로 접근
console.log(obj['book']['price'])

// 1. 객체안에 객채 접근방법 : 변수로 접근 
let objBook = 'book';
let objPrice = 'price';
let objTitle = 'title';

console.log(obj[objBook][objTitle])