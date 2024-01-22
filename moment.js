var moment = require('moment');

//creating a new moment object representing the current date and time and then converting it to a string using the toString() method.
var dateNow = moment().toString();
console.log(dateNow);

//adding and subtracting time
var futureDate = moment().add(7, 'days');
console.log(futureDate.toString());

var pastDate = moment().subtract(3, 'months');
console.log(pastDate.toString());

//format dates
var formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(formattedDate);

//difference between days
var startDate = moment("2023-01-01");
var endDate = moment("2023-02-01");
var duration = moment.duration(endDate.diff(startDate));
console.log(duration.asDays() + " days difference");

//date in past or future
var futureCheck = moment("2024-02-22").isAfter(moment());
console.log("Is in the future: " + futureCheck);

var pastCheck = moment("2023-02-22").isBefore(moment());
console.log("Is in the past: " + pastCheck);
