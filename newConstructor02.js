function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

//prototype의 역할은 객체끼리 공유하고 싶은 함수나 값을 설정함
Animal.prototype.say = function(){console.log(this.sound)}
Animal.prototype.sharedValue = '사람과 친한 동물'

const dog = new Animal('개','바둑이','멍멍')
const cat = new Animal('고양','네로','미야ㅏㅏㅏ옹')

dog.say()
cat.say()

dog.sharedValue;
cat.sharedValue;

console.log(dog.sharedValue)
console.log(cat.sharedValue)

console.log(dog.type)  
console.log(cat.name)

function Great_grandfather(){
    this.eyes = 'black eyes';
}

function Grandfather(){
    this.hair = 'blond hair';
}

Grandfather.prototype = new Great_grandfather()

function Father(){
    this.skin = 'white skin';
}

Father.prototype = new Grandfather()

function Baby(){
    this.name = 'joowon';
}

Baby.prototype = new Father()

let yoon = new Baby();

if(Great_grandfather.prototype.isPrototypeOf(yoon)){
    // yoon이 great_grandfather 의 특성을 상속받았다면
    console.log(yoon.eyes)
    console.log(yoon.hair)
    console.log(yoon.skin)
    console.log(yoon.name)
}
console.log(yoon)

//isPrototypeOf 예제
let day = new Date()
console.log(Date.prototype.isPrototypeOf(day))