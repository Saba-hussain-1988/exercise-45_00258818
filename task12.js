/* Tassk 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. 
 The text of each message should be the same,
  but each message should be personalized with the person’s name.*/

  // array of task 11
  var names = ["Mrs: Shumaila Munaaf", "Mrs: Sakina Baber", "Mrs: Falak Bilal", "Mrs: Kehkashan Sohail"];
var message = "Where are you vanished since thursday. I`m really missing you."


 //print each element , one at a time
 for (var i = 0; i < names.length; i++) {
    console.log ("Hello! " + names[i] + "; " + message);
 }