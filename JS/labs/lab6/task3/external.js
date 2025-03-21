/*
3- Write a JavaScript function to get the month name 
from a particular date.
*/
function monthName(date) {
    // US English uses month-day-year order and 12-hour time with AM/PM
    // toLocaleString(locales, options)
    return date.toLocaleString('en-US' , { month: 'long' });  //return month name
}
var myDate = new Date();
console.log(monthName(myDate));
myDate.toISOString()