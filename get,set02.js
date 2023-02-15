    let user = {

        name: "John", surname:"smith",

        get fullName(){
            return `${this.name} ${this.surname}`
        },

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        }
};

//주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Special"

alert(user.fullName);
alert(user.name);
alert(user.surname);