/**
 * Created by iceeyes on 2017/7/13.
 */
//默认情况下输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//用于监听用户的输入数据
process.stdin.on('data',function(chunk){//chunk代表用户输入值的参数
    console.log('用户输入了:'+chunk)
})