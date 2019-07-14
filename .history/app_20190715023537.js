'use strict'
let DateFormate= require ('./date');
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

module.exports.HMSConversion= (second,t='s')=>{
    second = Number(second);
    var h = Math.floor(second / 3600);
    var m = Math.floor(second % 3600 / 60);
    var s = Math.floor(second % 3600 % 60);
    if(t === 's'){
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    }
    if(t === 'd'){
        h = String(h);
        m = String(m);
        s = String(s);
       return h.padStart(2, '0') +':'+ m.padStart(2, '0') + ':' + s.padStart(2, '0');
    }
    return hDisplay + mDisplay + sDisplay; 
}
module.exports.DateConversion = (current_date, type) =>{
    return DateFormate.DateConversion(current_date, type);
}
