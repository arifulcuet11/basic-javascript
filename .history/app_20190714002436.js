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

module.exports.HMSConversion= (second)=>{
    second = Number(second);
    var h = Math.floor(second / 3600);
    var m = Math.floor(second % 3600 / 60);
    var s = Math.floor(second % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}