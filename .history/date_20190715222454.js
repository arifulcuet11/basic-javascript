'user-strict'

const dataFormate = [
   'DD-MM-YYYY',
   'YYYY-MM-DD',
   'MM-DD-YYYY',
   'YYYY-MM-DD HH:MM:SS',
   'DD MMM YYYY',
   'MM/DD/YYYY'
   , 'DD/MM/YYYY',
   'YYYY/MM/DD',
   'MMM DD YYYY',
   'DD-MM-YYYY HH:MM:SS',
   'MM-DD-YYYY HH:MM:SS'
]
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let convertDate = (current_Date, type) => {
   const dateType = dataFormate.find(x => x == type);
   let day = String(current_Date.getDate());
   let month = String(current_Date.getMonth() + 1);
   let year = String(current_Date.getFullYear());
   /*
     fixed 2 digits for day, month, year
   */
   day = day.padStart(2, 0);
   month = month.padStart(2, 0);
   year = year.padStart(2, 0);
   
   let hours = String(current_Date.getHours());
   let minutes = String(current_Date.getMinutes());
   let seconds = String(current_Date.getSeconds());

   hours = hours.padStart(2,0);
   minutes = minutes.padStart(2,0);
   seconds = seconds.padStart(2,0);

   if (dateType === 'DD-MM-YYYY') {
      let formatted_date = day + "-" + month + "-" + year;
      return formatted_date;
   }
   else if (dateType === 'YYYY-MM-DD') {
      let formatted_date = year + "-" + month + "-" + day;
      return formatted_date;
   }
   else if (dateType === 'MM-DD-YYYY') {
      let formatted_date = month + "-" + day + "-" + year;
      return formatted_date;
   }
   else if (dateType === 'YYYY-MM-DD HH:MM:SS') {
      let formatted_date = year + "-" + month + "-" + day + ' '+ hours +':'+minutes +':'+seconds;
      return formatted_date;
   }
   else if (dateType === 'DD MMM YYYY') {
      let formatted_date = day +' ' + months[Number(month)-1] + ' ' + year;
      return formatted_date;
   }
   else if (dateType === 'MM/DD/YYYY') {
      let formatted_date = month + "/" + day + "/" + year;
      return formatted_date;
   }

   else {
      return 'Date formate not found.';
   }
}
function DateConversion(current_Date, type) {
   return convertDate(current_Date, type)
}

export { DateConversion };