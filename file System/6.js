/**
 * Created by iceeyes on 2017/7/14.
 */
var fs=require('fs');
//添加文件夹
/*
fs.mkdir('./1r',function(){
    console.log(arguments)
})*/
//删除文件夹
/*fs.rmdir('./1r', function () {
     console.log(arguments)
})*/
//读取文件夹里面的内容
fs.readdir('../file System', function (err,filelist) {
   // console.log(filelist)
      filelist.forEach(function(f){
          fs.stat(f,function(err,info){
             // console.log(arguments);
              switch (info.mode){
                  case 16822:
                      console.log('[文件夹]'+f);
                      break;
                  case 33206:
                      console.log('[文件]'+f);
                      break;
                  default:
                      console.log('[其他类型]'+f);
                      break;
              }
          })
      })
})