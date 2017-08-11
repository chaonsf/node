/**
 * Created by iceeyes on 2017/8/11.
 */
/*
* 搭建一个http服务器，用于处理用户发送的http请求
* 需要使用node提供一个模块  http
* */

//加载一个http模块
var http=require('http');
//通过http模块下的creatServer创建并返回一个web服务器
var server=http.createServer();
server.listen(8080,"localhost");
server.on('listening',function(){
    console.log(1)
})

server.on('request', function (req,res) {
   console.log("有客户端请求了");
    res.write("<h1>hello</h1>");
    res.end();
})
//console.log(server.address());