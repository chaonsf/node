/**
 * Created by iceeyes on 2017/7/17.
 */
//console.trace方法用于将当前位置处的栈信息作为标准错误信息进行输出
var user=new Object();
user.name='licoa';
user.getname= function () {
    return this.name;
};
user.setname= function (name) {
    this.name=name;
};
console.trace('trace');