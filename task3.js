//Task 3:  store a persn name i a variable. 
//and then print that person name in lowercase, uppercase and titlecase.

//Author: Saba Hussain
//Date : 17 / feb / 2024   saturday

//initialize variable
var personName = "Mrs: Mustafa Ahmed Raza";

// in lowercase
console.log ("Person Name in lowercase: " + personName.toLowerCase());

// in uppercase
console.log ("Person Name in Uppercase: " + personName.toUpperCase());

// in titlecase
console.log ("Person Name in Titlecase: " + personName.replace(/\b\w/g,c=> c.toUpperCase()));