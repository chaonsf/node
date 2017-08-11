/**
 * Created by iceeyes on 2017/7/14.
 */
var  fs=require("fs");
var  filename="2.txt";//本来目录中没有2.txt的
/*
* 向一个指定的文件中写入数据，如果该文件不存在，则新建。如果存在，则新的内容会覆盖原有的文件内容
* */
fs.writeFile(filename,"hello", function () {
    console.log(arguments)
})
fs.appendFile(filename,'-ero', function () {
     console.log(arguments)
})