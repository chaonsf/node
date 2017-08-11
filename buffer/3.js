/**
 * Created by iceeyes on 2017/7/13.
 */
var str="miaov";
console.log( new Buffer(str));
var bf=new Buffer(3);
bf.write(str)
console.log(bf)