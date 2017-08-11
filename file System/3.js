/**
 * Created by iceeyes on 2017/7/14.
 */
var fs=require('fs');
fs.open('1.txt','r+',function(err,fd){
    /*
    * fs.write(fd,buffer,offset,length[,position],callback)
    *   fd:打开的文件
    *   buffer：要写入的数据
    *   offset：buffer对象中要写入的数据的起始位置
    *   length：要写入buffer数据的长度
    *   position:fd中的起始位置
    *   callback：回调
    * */
    if(err){
        console.log('打开文件位置失败');
    }else{
        var bf=new Buffer("123");
        fs.write(fd,bf,0,3,0,function(){
             console.log(arguments)
        })
    }
})