function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    
}

const rabbit = new Animal('토끼','토토','깡총')
const rat = new Animal('쥐','수','찍찍')
const elephant = new Animal('코끼리','코코','이에엥에ㅔㅔ엑')

console.log(rabbit)
console.log(rat)
console.log(elephant)