/**
 * Created by iceeyes on 2017/7/14.
 */
var fs=require('fs');
fs.open('1.txt','r', function (err,fd) {
     if(err){
         console.log('文件打开失败')
     }else{
         //读取文件
         /*
         * fs.read(fd,buffer,offset,length,position,callback)
         *    fd:通过open方法打开的一个文件返回的编号
         *    buffer：buffer对象
         *    offset：偏移量 ,新的内容添加到buffer的起始位置
         *    length：长度  添加到buffer中的内容长度
         *    position：位置  读取的文件中的起始位置
         *    callback回调
         *             err
         *            buffer的长度
         *            buffer对象
         * */
         var bf1=new Buffer(10);
         fs.read(fd,bf1,0,8,null, function (err,len,newbf) {
             console.log(bf1.toString());
             console.log(len);
             console.log(newbf);
         })
     }
})