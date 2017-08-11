/**
 * Created by iceeyes on 2017/7/18.
 */
var fs=require('fs');
var filedir='./miaov/source';
fs.watch(filedir,function(ev,file){
    //这里不需要判断file里是否有内容
    //文件夹里面只要有一个文件发生变化，我们就需要对这个文件夹下的所有文件进行读取，然后合并
    fs.readdir(filedir,function(err,dataList){
        var arr=[];
        dataList.forEach(function(f){
            //判断f是否存在
           if(f){
               var info= f.statSync(filedir+"/"+f);
               //console.log(info);
               if(info.mode==33206){
                   arr.push(filedir+"/"+f);
               }
           }

        })
        //读取数组中的文件内容，并合并
        var content="";
        arr.forEach(function(f){
            var c=fs.readFileSync(f);
            console.log(c);
            content+= c.toString()+'\n';
        })
        fs.writeFile('./miaov/js/index.js',content)
    })
})