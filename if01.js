// 중첩 if문 연습 - 로그인 : id.pw 입력받고, 기존 id,pw 와 일치여부에 따른 처리
let id = 'korea'
let pw = 'korea123'


let inputId=prompt('아이디를 입력하세요',"")
let inputPw=prompt('비밀번호를 입력하세요',"")

if(id==inputId){
        if(pw==inputPw){document.write(id+'님이 로그인 하였습니다.')}
        else{alert('비밀번호가 틀렸습니다')
    //location.reload()
    }
}
else{
    alert('아이디가 틀렸습니다.')
    // location.reload()
    
}