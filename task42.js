/* Great Magicians: Start with a copy of your program . Write a function called make_great() that
 modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.*/

  // Define the show_magicians function
  function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    
    for (var i = 0; i < magicians.length; i++) {
        console.log(  magicians[i] );
    }
}

// Define the make_great function
function make_great(magicians) {
    // Modify the array of magicians by adding "the Great" to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

// Create an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function to modify the array of magicians
make_great(magicians);

// Call the show_magicians function to see that the list has been modified
show_magicians(magicians);