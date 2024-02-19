/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 return the new array and store it in a separate array. Call show_magicians() with each array 
 to show that you have one array of the original names and one array with the Great added to 
 each magician’s name*/

 // Define the show_magicians function
 function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define the make_great function
function make_great(magicians) {
    // Create a copy of the array to avoid modifying the original array
    var new_magicians = [...magicians];

    // Modify the copy of the array by adding "the Great" to each magician's name
    for (var i = 0; i < new_magicians.length; i++) {
        new_magicians[i] += " the Great";
    }

    // Return the new array with the modified magician names
    return new_magicians;
}

// Create an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the array of magician's names
var great_magicians = make_great(magicians.slice()); // Use slice() to create a shallow copy of the array

// Call the show_magicians function with both the original array and the new array
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);