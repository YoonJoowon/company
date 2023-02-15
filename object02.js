const book1 = { title : 'python Basic', book_type : 'programming language', price : 18000}
const book2 = { title : 'JS master', book_type : 'programming language', price : 24000}

// //방식1. 일반함수와 객체로의 표헌
// function bookInfo(item){
// const text = `이책 제목은 ${item.title}이고, 종류는 ${item.book_type}관련이고, 가격은 ${item.price}원 입니다`
// console.log(text)
// }
// bookInfo(book1) //함수명 bookInfo를 통해 호출, item이라는 파라미터 매개변수에 book1이라는 객체를 넣어 공식을 활용
// bookInfo(book2)


// //방식2. 비구조화할당으로 함수와 객체 표현
// function bookInfo(item){
// const {titke,book_type,price}=item //한줄 추가된 비구조화 할당 방식
// const text = `이 책 제목은 ${title}이고, 종류는 ${book_type}관련이고, 가격은 ${price}원 입니다` //item을 반본적으로 적지 않아도 됨!
// console.log(text)
// }
// bookInfo(book1) //함수명  bookInfo 를 통해 호출, item 이라는 파라미터 매개변수명에 book1이라는 객체를 넣어 공식을 활용
// bookInfo(book2)

//방식3. 비구조화할당으로 함수와 객체 표현
function bookInfo({title,book_type,price}){
const text = `이 책 제목은 ${title}이고, 종류는 ${book_type}관련이고, 가격은 ${price}원 입니다` //item을 반본적으로 적지 않아도 됨!
console.log(text)
}
bookInfo(book1) //함수명  bookInfo 를 통해 호출, item 이라는 파라미터 매개변수명에 book1이라는 객체를 넣어 공식을 활용
bookInfo(book2)