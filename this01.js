const dog = {
    name : '홍',
    age : '3살',
    say : function say(){
        console.log(this.age)
    }
}

const cat = {
    name : '청',
    age : 8,
}

dog.say();
cat.say = dog.say;
cat.say();

    const obj = {
        go:'나는 갈 때까지 고',
        a : function a (){console.log('first',this)},
        b(){console.log('second',this)},
        cc : function c(){console.log('third',this)},
        d : ()=>{console.log('forth',this)},
        e : function e(){console.log('fith',this.go)},
        f : function f(){console.log(sixth),this.gogo},
    }
    obj.a()
    obj.b()
    obj.cc()
    obj.d()
    obj.e()
    obj.f()