/*Task 15: Changing Guest List: 
You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.*/

//Author : Saba Hussain
//Date : 17-02-2024 saturday

// original guest list
var guestList = ["Hira Shah", "Sabina Ansar", "Haya Rajpot", "Kashaf Khan", "Bakhtawar Malik"];

//Assume Kashaf khan can`t make it, replace her with someone else
//print the name who can`t make the dinner
var replaceGuest = guestList.splice(3, 1, "Fabiha Hayat");
console.log ("\n" + replaceGuest + " can not attend the dinner.");


//send out new invitation
// invitation message
var message = "\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \n Saba Hussain";
console.log ("\nNew invitations: ");
for (var k = 0; k < guestList.length; k++) {
    console.log ("Dear " + guestList[k] + message + "\n");
}