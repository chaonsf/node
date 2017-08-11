/**
 * Created by iceeyes on 2017/8/11.
 */
var http=require('http');
var url=require("url");
//var urlStr=url.parse("http://www.baidu.com:8080/a/index.html?b=2#p=1");
//console.log(urlStr);
var server=http.createServer();
server.on('request',function(req,res){
    //console.log(req);
   var urlStr=url.parse(req.url);
    console.log(urlStr);
    switch (urlStr.pathname){
        case "/":
            //首页
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>这是首页</h1>');
            break;
        case "/uesr":
            //用户首页
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心</h1>');
            break;
        default :
            //其他情况
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>页面被leo吃了</h1>');
            break;
    }
});
server.listen(8080,'localhost');
