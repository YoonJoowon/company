//  function 함수로 나중에 사용하기 편하도록 미리 로직을 만들어둠 / x,y는 parameter 매개변수
function twoNum (x,y){
    return x+y
}

// function 함수를 호출해서 사용하기 = twoNum(20,30)이 호출하는 코드
let sum = twoNum(35,30)
console.log(sum)

function grade(socre){  //함수 공식 미리 생성
    if(socre>=90){return 'A'}
    else if(socre>=80){return 'B'}
    else if(socre>=70){return 'C'}
    else if(socre>=60){return 'D'}
    else return 'F'
}

const result = grade(90) //함수 grade(45)로 호출해서 사용
console.log(result) //결과 F