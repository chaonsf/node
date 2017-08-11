/**
 * Created by iceeyes on 2017/7/17.
 */
//console.time标记开始时间，timeend表结束时间
console.time('small loop');
for(var i= 0;i<10000;i++){
    ;
}
console.timeEnd('small loop');