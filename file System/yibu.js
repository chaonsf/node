/**
 * Created by iceeyes on 2017/7/14.
 */
  var fs=require("fs");
 fs.open('1.txt','r', function (err,fd) {
     console.log(err);
});
console.log("ok");
//通过上面结果，说明异步如果有后续处理只能放在函数内部进行