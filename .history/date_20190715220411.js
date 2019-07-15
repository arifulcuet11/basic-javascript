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

let convertDate = (current_Date, type)=>{
   const dateType = dataFormate.find(x=>x==type);
   if(dateType === 'DD-MM-YYYY'){
      let formatted_date = current_datetime.getDate() 
                           + "-" + (current_datetime.getMonth() + 1)
                            + "-" + current_datetime.getFullYear();
      return formatted_date;
   }
}
 function DateConversion  (current_Date, type){
    return convertDate(current_Date, type)
}

export {DateConversion};