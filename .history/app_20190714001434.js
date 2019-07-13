'use strict'
module.exports.MinuteConversion= (second)=>{
    if(second == null || second == undefined){
        return 0;
    }
    else{

        minutes = Math.floor(second / 60);
        return minutes + ':' + (second - minutes * 60);
    }
}