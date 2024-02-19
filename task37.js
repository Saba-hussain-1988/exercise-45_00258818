/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.

*/

// define function make_shirt with default parameters
function make_shirt(size = "large", message = "I love typeScript.") {
    console.log ("A " + size + " sized shirt will be print with the message: " + message);
}

// call function to make large shirt with default message
make_shirt();

//call function to make medium shirt with default message
make_shirt('medium');

// call function to make another size of shirt with different message
make_shirt('small', 'I love Python');
