// Count characters in a string to produce an object with the count information
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }


  // Shuffle an array with JS methods - good for smaller arrays
  let friends = ['steven','deo','diana','randy','ted']
  let shuffledFriends = Friends
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)


// JS date formatting
const time = {
   days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
   months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
   dates: ["null", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
}
let d = new Date()
// FORMAT EXAMPLE: Thursday March 11th, 2021
let updateMessage = <h3>{`${time.days[d.getDay()]} ${time.months[d.getMonth()]} ${time.dates[d.getDate()]}, ${d.getFullYear()}`}</h3>
// For Hours and Minutes or more information go to https://www.w3schools.com/js/js_date_methods.asp