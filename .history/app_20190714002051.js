'use strict'
module.exports.MinuteConversion= (second)=>{
    if(second == null || second == undefined){
        return 0;
    }
    else{
        let minutes = Number(second);
        if(minutes == 'NaN'){
            return 0;
        }
         minutes = Math.floor(second / 60);
        return minutes + ':' + (second - minutes * 60);
    }
}