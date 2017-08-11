/**
 * Created by iceeyes on 2017/7/14.
 */
var bf=new Buffer('miaov');
console.log(bf);
var bf3=bf.slice(2,4);
console.log(bf3);
bf3[0]=2;
console.log(bf3);
console.log(bf)
//以下是拷贝的方法
var bf4=new Buffer(6);
/*bf.copy(bf4);
console.log(bf4);
bf4[0]=1;
console.log(bf4);
console.log(bf);*/
bf.copy(bf4,2,2,4);//第一位代表需要拷贝的buf，第二个代表从bf4的第几位开始需要拷贝，第三位数代表bf的第几位开始拷贝，第四个是拷贝的结束位置（不包括结束位）
console.log(bf4);