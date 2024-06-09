//create today in a date format
const today = new Date();

//format the date to YYYY-MM-DD
const yyyy = today.getFullYear();

//get minimum month which is current month
const mmMin = String(today.getMonth() + 1).padStart(2, '0');

//get minimum day which is next day after current day (tomorrow)
const ddMin = String(today.getDate() + 1).padStart(2, '0');

//get maximum month which is 1 month after current month (next month)
const mmMax = String(today.getMonth() + 2).padStart(2, '0');

//get maximum day which is 1 month from today
const ddMax = String(today.getDate()).padStart(2, '0');

//organize number and string variables into a string format to represent min/max dates
const minimumDate = `${yyyy}-${mmMin}-${ddMin}`;
const maximumDate = `${yyyy}-${mmMax}-${ddMax}`;

//set the min/max attribute of the date input, thus ensuring users cannot input invalid dates
document.getElementById('date-input').setAttribute('min', minimumDate);
document.getElementById('date-input').setAttribute('max', maximumDate);

//validate today, year, minimum month and day, maximum month and day
console.log(today);
console.log(yyyy);
console.log(mmMin);
console.log(ddMin);
console.log(mmMax);
console.log(ddMax);