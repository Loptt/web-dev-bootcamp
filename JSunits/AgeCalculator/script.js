var age = prompt("What is your age?");

var days = (age * 365);
var extraDays = age / 4;

days = days + extraDays;

alert("You've been alive for roughly " + days + " days");