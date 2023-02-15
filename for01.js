const A = ['a', 'b', 'c', 'd','e','f','g']
for(let i=3; i<5; i++){
    console.log(A[i])
}

const B = ['a','b','c']
for(let Alpa of B){console.log(Alpa)}

const C =['a','b','c','d']
C.forEach(function (cc, index, array){console.log(cc, index, array)}
)

for(i=3; i>0; i--){
    console.log(`1씩 다운: ${i}`)
}

for(let i=1; i<3; i++){
    for(let u=1; u<5; u++){
        console.log(`${i}, ${u}`)
    }
}

for (let i=2; i<10; i++){
    for(let u=1; u<10; u++){
        document.write(i+"x"+u+"="+(i*u)+"<br><br>")
    }
}

for(let i=1; i<6; i++){
    for(let star =1; star<=1; star++)
    document.write('*')

}

for(let a=0; a<=4; a++){
    if(a%2!==0)continue;
    console.log(a)
}

for(let a=11; a<=15; a++){
    if(a>13)break;
    console.log(a)
}