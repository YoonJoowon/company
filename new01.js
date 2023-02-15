let mm = new Object();
mm.name = '주원'
mm['age'] = 27621;
mm.hi = function(){
    console.log(`이름은 ${this.name} 이고, 나이는 ${this.age} 입니다`)
}
mm.hi()

let strObj = new String([1,2,3],'hihello')
console.log(strObj)
let arrObj = new Array([1,2,3])
console.log(arrObj)

function A(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}

let A1 = new A('wioer','werv',3123)
let A2 = new A('gbfgb','etteh',21565)

document.write(`${A1.a}, ${A1.c} <br>`)
document.write(`${A2.b}, ${A2.c} <br>`)

function AA(BB){
    this.BB=BB;      
    this.CC = function(){
        return 2*this.BB
    }
}

const cc1 = new AA(10)
document.write(`<br> ${cc1.BB}, ${cc1.CC()}`)