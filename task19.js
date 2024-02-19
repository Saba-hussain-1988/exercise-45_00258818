/*Task 19:
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */

//working with exercise 17
// guestList
var guestList = ["Faryal Ghori", "Hira Shah", "Sabina Ansar", "Zonaira Tahir", "Haya Rajpot", "Fabiha Hayat", "Bakhtawar Malik", "Hadia Chohan"];

// Printing message indicating the number of people invited to dinner
console.log("You are inviting " + guestList.length + " people to dinner.");

// Printing message about the limit
console.log("You can only invite two people for dinner.");

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