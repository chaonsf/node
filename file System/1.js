/**
 * Created by iceeyes on 2017/7/14.
 */
//fs模块
var fs=require('fs');
/*
* fs.open(path,flags,[mode],callback)
* path:要打开的文件路径
* flags打开文件的方式   读/写
* mode设置文件的模式  读/写/执行
* callback：回调  err表文件打开失败的错误保存在err里面，如果成功err为null
*          fd：被打开文件的标识
*
* */

fs.open('1.txt',"r",function(err,fd){
     console.log(err);
    console.log(fd)
})