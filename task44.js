/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time*/

 // Define the make_sandwich function
 function make_sandwich(...items) {
    // Print a summary of the sandwich being ordered
    console.log("Making a sandwich with the following items:");
    for (var i =0; i <items.length; i++) {
        console.log("- " + items[i]);
    };
    console.log("Sandwich is ready!");
}

// Call the function three times with a different number of arguments each time
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly");