'user-strict'

let dataFormate =[
            'DD-MM-YYYY', 
            'YYYY-MM-DD',
            'MM-DD-YYYY',
            'MM-DD-YYYY', 
            'YYYY-MM-DD HH:MM:SS',
            'DD MMM YYYY',
            'MM/DD/YYYY'
            ,'DD/MM/YYYY',
            'YYYY/MM/DD',
            'MMM DD YYYY',
            'DD-MM-YYYY HH:MM:SS', 
            'MM-DD-YYYY HH:MM:SS'
        ]

let DateConversion = (current_Date, type)=>{
   const dateType = this.dataFormate.find(x=>x==type);
   if(dateType === 'DD-MM-YYYY'){
       console.log('Date Find');
       console.log(current_Date);
   }
}
exports.DateFormate= (current_Date, type)=>{
    this.DateConversion(current_Date, type)
}