function generateMonth(year, month){
let calendar = [];
const today = new Date();
let calendarString = '';

//console.log(`${today}'\n`);

const monthNames = {
    short: {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    },
    long: {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
}

if(!month) {
     var month = today.getMonth();  //checks if function is called with Month / else gets the current one
    }
if(!year) {
     var year = today.getFullYear(); //checked if function is called with year, else gets the current one
    }
let startDay = new Date(year, month, 1).getDay();

//console.log(monthNames.short[today.getMonth()]); //returns the current month in Long
//console.log(monthNames.long[today.getMonth()]); //returns the current month in Long

if (startDay === 0) { // if the month starts at Sunday , make sunday day 7 in the week
    startDay = 7;
  }
let numDays = new Date(year, month + 1, 0).getDate();
calendarString += `${monthNames.long[month]} ${year}\n`;  // generating the view of the month
calendarString += 'Mo Tu We Th Fr Sa Su\n';
  for (let daysBefore = 1; daysBefore < startDay; daysBefore++) {  // add the days that are before the first day of the month
    calendar.push(' ');
  }
  for (let daysMonth = 1; daysMonth <= numDays; daysMonth++) {
    calendar.push(daysMonth);
  }
  for(let daysMonth = 1; daysMonth < calendar.length; daysMonth++){
    if(daysMonth % 7 === 0){
        calendarString += '\n';
    }
    calendarString += calendar[daysMonth] + ' ';
  }
  // return calendarString;

console.log(calendar);
console.log(calendarString);

}

generateMonth(1997, 4);