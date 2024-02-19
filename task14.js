/*Task 14: Guest List: If you could invite anyone,
 living or deceased, to dinner,
  who would you invite?
   Make a list that includes at least three people you’d like to invite to dinner. 
   Then use your list to print a message to each person, inviting them to dinner.*/

//Author : Saba Hussain
//Date : 17-02-2024 saturday

// Initialize an array of people to invite ti dinner,
var guestList = ["Hira Shah", "Sabina Ansar", "Haya Rajpot", "Kashaf Khan", "Bakhtawar Malik"];

// invitation message
var message = "\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \n Saba Hussain";

// print invitation message to each person,
for (var i = 0; i < guestList.length; i++) {
console.log ("Dear " + guestList[i] + "," + message + "\n");
}