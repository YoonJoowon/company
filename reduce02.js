function add(a,b){
    return a+b;
}
console.log(add)

const sayHello = function(){
    console.log('hello!');
}
sayHello();

const add1 = (a,b) => {
    return a+b;
}
const add2 = (a,b) => (a+b);

function Num(first, second, third){
    this.second=second;
    this.first=first;
    this.third=third;
}

const num1 = new Num('1','2','3')      
const num2 = new Num('4','5','6')

console.log(num1)
console.log(num2)