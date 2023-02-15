const bulgogiPizza = {
    topping : 'beef',
    price : 26000,
    'pizza brand' : '59pizza'
}

const seafoodPizza = {
    topping : 'shrimp',
    price : 30000,
    'pizza brand':'Mr.pizza'
}

// 함수생성 : 객채의 key를 통해서 객채 정보를 텍스트로 출력하는 함수
function pizzaInfo(pizzaName){
    const text = `이 피자 브랜드는 ${pizzaName['pizza brand']}, 토핑은 ${pizzaName.topping}, 가격은 ${pizzaName.price}이다`
    console.log(text)
}

// 객체 정보를 pizzaInfo 함수를 통해 호춣 한다.
pizzaInfo(bulgogiPizza)
pizzaInfo(seafoodPizza)