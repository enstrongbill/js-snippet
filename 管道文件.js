// 管道就是前一个函数处理的结果就是后一个函数的输入
// linux中的命令也有管道的概念(用|号来表示)
// 如ping www.baidu.com | grep ttl(意思是在ping百度的结果中找到ttl的结果)

// es6的写法
// 我们需要让某个数先加了一遍在乘，当然我们可以用一个函数来表示，但是我们分开两个函数来实现管道
let pipeline = (...funcs) => val => funcs.reduce((pre, cur) => cur(pre), val);
let plus = a => a + 1;
let mult = a => a * 2;
let combine = pipeline(plus, mult);
console.log(combine(10));


// es5的写法(你可以直接用babel来转换)
var pipeline = function pipeline() {
    var len = arguments.length;
    var funcs = Array(len);
    for (var i = 0;i < len; i ++){
        funcs[i] = arguments[i]
    }
    
    return function(val){
        return funcs.reduce(function(pre, cur){
            return cur(pre);
        }, val);
    }
}

var plus = function plus(a){
    return a + 1;
}

var mult = function(a){
    return a * 2;
}
var combine = pipeline(plus, mult);