// 原生的构造函数和类是同一个的东西，特别的怪异，而且方法还是要单独写在外面
function User(name, pass){
    this.name = name;
    this.pass = pass;
}
User.prototype.showName = function(){
    console.log(this.name);
}
User.prototype.showPass = function(){
    console.log(this.pass);
}
var bill = new User('bill', '123456');
bill.showName();
bill.showPass();

// 原生继承的写法
function　SuperUser(name, pass, level){
    User.call(this, name, pass); //继承父类的属性
    this.level = level;
}
// 继承的代码
SuperUser.prototype = new User();
SuperUser.prototype.constructor = SuperUser;

SuperUser.prototype.showLevel = function(){
    console.log(this.level);
}


var superbill = new SuperUser('superbill', 'vipvip', 12);
superbill.showName();
superbill.showLevel();




// es6的写法(记住函数之间并不用写逗号，有参数是写在够着函数里，而不是类名上面)
class User{
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }
    showName(){
        console.log(this.name);
    }
    showPass(){
        console.log(this.pass);
    }
}
var bill = new User("bill", "123456");
bill.showName();
bill.showPass();

class SuperUser extends User{
    constructor(name, pass, level){
        super(name, pass); //继承父类的属性

        this.level = level;
    }
    showLevel(){
        console.log(this.level);
    }
}

var superbill = new SuperUser("superbill", "vipvip", 12);
superbill.showName();
superbill.showLevel();