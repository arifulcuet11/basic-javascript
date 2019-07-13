'use strict'
module.exports.MinuteConversion= (second)=>{
    if(second == null || second == undefined){
        return 'Please import valied number.';
    }
    else{
        let minutes = Number(second);
        if(minutes == 'NaN'){
            return 'Please import valied number.'
        }
         minutes = Math.floor(second / 60);
        return minutes + ':' + (second - minutes * 60);
    }
}