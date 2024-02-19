/*Task 34: Pizzas: Think of at least three kinds of your favorite pizza.
 Store these pizza names in a array, and then use a for loop to
  print the name of each pizza.
• Modify your for loop to print a sentence using the name of the 
pizza instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing 
a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop,
 that states how much you like pizza. 
 The output should consist of three or more lines about 
 the kinds of pizza you like and then an additional sentence,
  such as I really love pizza!

 */

  // array of favorite pizzas names
  var pizzas = ['Pepperoni', 'Margherita', 'Supreme'];

  // printing the names of pizzas by loop
  console.log ("Printing pizza names:");
  for (var i = 0; i < pizzas.length; i++) {
    console.log (pizzas[i]);
  }

  //modifying the for loop to print a sentence using the name of pizza
  console.log ("\nPrinting pizza statements:");
  for (var j = 0; j < pizzas.length; j++) {
    console.log("I like " + pizzas[j] + "pizza.");
  }

  // adding a line out side the loop
  console.log ("\nI really love pizza!");