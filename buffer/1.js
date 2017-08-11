/**
 * Created by iceeyes on 2017/7/13.
 */
//new Buffer(size); size[Number]  创建一个buffer对象，并为这个对象分配一个大小
//当我们为一个Buffer对象分配空间大小以后，其长度是固定的，不能更改
/*
var bf=new Buffer(6);
console.log(bf);*/


//new Buffer(array)
/*
var bf=new Buffer([1,2,3]);
console.log(bf)*/

//new Buffer(string,[encoding]);    toString(16)是转换成16进制
var bf=new Buffer("lichao",'utf-8');
console.log(bf);
for(var i=0;i<bf.length;i++){
   // console.log(bf[i].toString(16));
    console.log(String.fromCharCode(bf[i]));
}
