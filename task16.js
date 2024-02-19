/*Task 16: More Guests: You just found a bigger dinner table, 
so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.*/ 

 // guestList
 var guestList = ["Hira Shah", "Sabina Ansar", "Haya Rajpot", "Fabiha Hayat", "Bakhtawar Malik"];

 //name of three new guests
 var new_guest = ["Faryal Ghori", "Zonaira Tahir", "Hadia Chohan"];

 //print invitation messages for each person
 function printInvitations(){
    for (var i = 0; i < guestList.length; i++) {
        console.log("\nDear " + guestList[i] + "\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \n Saba Hussain ");
    }
 }

 //print statement about bigger dinner
 console.log ("Great news! We found a bigger dinner table!");

 // Add one guest to the beginning of the array
 guestList.unshift(new_guest[0]);

 // Add one new guest to the middle of the array
 guestList.splice(Math.floor(guestList.length / 2), 0 , new_guest[1]);

 //add one new guest in the end of the array
 guestList.push(new_guest[2]);

 //print new set of invitation
 printInvitations();