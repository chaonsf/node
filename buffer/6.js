/**
 * Created by iceeyes on 2017/7/14.
 */
/*
* 类方法，静态方法
* */
console.log(Buffer.isEncoding('utf-8'));
//判断一个对象是不是buffer,返回true false
var arr=[1,2,3];
var bf=new Buffer(10);
console.log(Buffer.isBuffer(arr));
console.log(Buffer.isBuffer(bf));
//判断字节长度
var str1="卖完";
console.log(str1.length);//字符长度
console.log(Buffer.byteLength(str1));//字节长度
console.log(Buffer.byteLength(str1,"ascii"));//在ascii编码的情况下的字节长度，默认的是utf-8编码
//buffer的拼接
var str2='miaov';
var str3="妙味";
var list=[new Buffer(str2),new  Buffer(str3)];
console.log(list);
var bf=Buffer.concat(list,11);//后面数字可以不写
console.log(bf)
process.stdout.write('请输入内容:');
process.stdin.on('data',function(chunk){
   //console.log(chunk.toString())
    console.log('输入的内容是:'+chunk)//字符串拼接的话会自动转换成toString()类型

})