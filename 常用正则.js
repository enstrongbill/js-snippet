// 1.去除字符串两边的空格
String.prototype.trim = function(){
    var target = this;
    return target.replace(/(^\s+)|(\s+$)/g,'');
}


// 2.网页a标签中连接和内容的匹配
// 像这种标签内的匹配比较复杂(要考虑的情况很多，如使用的单引号，闭合标签中有空格，a含有多个属性等)，所以正则都是根据自己的需求不断的完善的
var str =
  '搜索引擎的网站<a class="baidu" href="www.baidu.com" >百度</a> <a href="www.google.com" class="google">谷歌</a>';
var arr = [];
var re = /<a.*?href=['"](.*?)['"].*?>(.+?)<\/a>/g;
while (re.exec(str) !== null) {
  arr.push(RegExp.$1 + "---" + RegExp.$2);
}
console.log(arr);


//3.敏感词过滤(将敏感次转换成*号)
// input: 我草你丫的，去死吧你，毛泽东，你哈哈哈
// output:我*你丫的，去*吧你，***，你哈哈哈

var str = '我草你丫的，去死吧你，毛泽东，你哈哈哈'
var re = /草|死|毛泽东/g;
var result = str.replace(re, function(target){
    var len = target.length;
    var replaceWord = '*';
    var output = '';
    while (len--){
        output += replaceWord;
    }
    return output
})
console.log(result);

//4.判断某字符串是否符合指定格式
// 给定字符串str,检查器是否满足如下格式
// xxx-xxx-xxxx，x为数字
var str = '123-456-7899';
var re = /^(\d{3}-){2}\d{4}$/;
console.log(re.test(str));


//5.人口数字的处理，每3个数字用逗号隔开
//input: 12345678
// output: 12,345,678
// \B是为了防止只有3位数,?=表示后面一定要有什么,?!表示后面一定不能有什么
var str = '12345678';
var re = /\B(?=(\d{3})+(?!\d))/g;
// var re = /(?=\B(\d{3})+$)/g; 这个也可以，两个我都看不大懂
console.log(str.replace(re, ','));


// 6.单词替换
// 把is替换成对应的大写字母
// \b是单词边界为了防止替换单词中的is,前后都要\b
var str = 'doing exercise is very iswelling thing';
var re = /\bis\b/;
var result = str.replace(re, function(target){
    return target.toUpperCase();
})
