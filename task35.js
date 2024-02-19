/* Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!*/


// array of animals
var animal = ["Dog", "Cat", "Rabbit"];

// loop, to printing a name of each animal
console.log("Printing animal names:");
for (var i=0; i < animal.length; i++) {
    console.log(animal[i]);
}

//modifying a loop to print a statement
console.log("\nPrinting statements about each animal:");
for (var j=0; j< animal.length; j++) {
    console.log("A " + animal[j] + " would make a great pet.");
}

// adding a line at the end
console.log("\nAny of these animals would make a great pet!");