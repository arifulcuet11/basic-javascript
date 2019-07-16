'use strict'
import * as dt from './date.js';
import * as bs from './basic.js'

let MinuteConversion= (second)=>{
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

let HMSConversion= (second,t='s')=>{
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

let DateConversion = (current_date, type) =>{
     return dt.DateConversion(current_date, type);
}

let DeepClone = (items) =>{
   return bs.clone(items);
}
export {MinuteConversion,HMSConversion,DateConversion, DeepClone}
