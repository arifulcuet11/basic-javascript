'use strict'
module.exports.MinuteConversion= (second)=>{
    if(second == null || second == undefined){
        return 0;
    }
    else{
        let minutes = Number(second);
        console.log(minutes);
         minutes = Math.floor(second / 60);
        return minutes + ':' + (second - minutes * 60);
    }
}