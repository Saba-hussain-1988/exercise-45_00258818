/*No Users: Add an if test to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

// array of user names
var userNames = ["admin", "fiza", "shiza", "sana", "hina", "bina", "sara", 'reema'];

//check if the list of users isn`t empty
if (userNames.length === 0){
    console.log("We need to find some users!");
} else { 
       //printing greetings through loop
    for (var i = 0; i < userNames.length; i++) {
        if (userNames[i] === "admin"){
            console.log("Hello admin, would you like to see a status report?");
        }else {
        console.log("Hello " + userNames[i] + ", thank you for logging in again.");
        }
    }
}

//remove all usernames from the array
userNames = [];

//check if the list is empty again
if (userNames.length === 0) {
    console.log ("We need to find some users!");
}