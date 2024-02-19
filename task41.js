/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/

// Define the show_magicians function
function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    for (var i =0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Create an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);