/**
 * Created by iceeyes on 2017/7/17.
 */
/*
setInterval(callback,delay[,...args])
预定每隔delay毫秒重复执行的callback，返回一个用于clearInterval()的Timeout
   callback:当定时器到点时要调用的函数，如果callback不是一个函数，则会抛出typeError
   delay：调用callback之前要等待的毫秒数
   ...args：当调用callback时要传入的可选参数

 setTimeout(callback,delay[,...args])
 预定在delay毫秒之后执行的单次callback，返回一个clearTimeout（）的Timeout
*/
var testFaction=function(){
    console.log('callback function executeted')
};
var timer=setInterval(testFaction,5000);
timer.unref();//取消setTimeout或setInterval函数中指定的回调函数的调用
timer.ref();//恢复回调函数的调用