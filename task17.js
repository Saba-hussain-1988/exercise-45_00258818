/*Task 17: Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know 
you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, 
letting them know they’re still invited.

• Remove the last two names from your list,so you have an empty list. 
 Print your list to make sure you actually have an empty list at the end of your program. */

 // guestList
 var guestList = ["Faryal Ghori", "Hira Shah", "Sabina Ansar", "Zonaira Tahir", "Haya Rajpot", "Fabiha Hayat", "Bakhtawar Malik", "Hadia Chohan"];

 // print statement about only being able to invite two people
 console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", \nI can't invite you to dinner.");
}

// Print message to the two people still on the list
for (var i = 0; i < guestList.length; i++) {
    console.log(`Dear ` + guestList[i] + `,\n you're still invited to dinner.`);
}

//remove last two names from the list
guestList.pop();
guestList.pop();

// Print the list to ensure it's empty
console.log("Updated guest list:", guestList);