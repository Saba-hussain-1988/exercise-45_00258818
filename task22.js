/*Task22: Intentional Error: 
If you haven’t received an array index error in one of your programs 
yet, try to make one happen.
 Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.*/

 //initialize an array
 var fruits = [
    "Apple",
    "Banana",
    "Peach",
    "Pear",
    "Pineapple"
 ];

 //Intentional error: access an element at out of bounds index
 console.log (fruits[7]);   //There is no element at index 7, it will produce an index error

 //correcting the error by acessing a valid index
 console.log (fruits[4]); //accessing the last element of array, "Pineapple"