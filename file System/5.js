
/**
 * Created by iceeyes on 2017/7/14.
 */
var fs=require('fs');
fs.readFile('2.txt', function (err,data) {
    console.log(arguments);
    if(err){
        console.log('文件读取失败')
    }else{
        console.log(data.toString())
    }
})