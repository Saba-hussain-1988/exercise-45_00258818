/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:*/

 //• Tests for equality and inequality with strings
 var a_string = "To be Or not to Be";
 var b_string = "to Be oR not To be";
 
 console.log ("Is a_string equal to b_string? I predict False.");
 console.log (a_string == b_string);  //False
 
 console.log ("Is a_string not equal to b_string? I predict True. ");
 console.log (a_string !== b_string);  //True
 
 
 //• Tests using the lower case function
 console.log ("Is a_string equal to b_string? I predict True.");
 console.log (a_string.toLowerCase() == b_string.toLowerCase());   //true
 
 console.log ("Is a_string equal to b_string? I predict False.");
 console.log (a_string == b_string.toLowerCase());  //False
 
 
 //• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 var h = 5;
 var i = 8;
 
 console.log ("Is h is equal to i? I predict False.");
 console.log (h == i); // False
 
 console.log("Is h not equal to i? I predict True.");
 console.log(h != i); // True
 
 console.log ("Is h greater then i? I predict False");
 console.log (h > i);   //Fasle
 
 console.log ("Is h less then i? I predict True");
 console.log (h < i);   //True
 
 console.log ("Is h less then or equal to i? I predict False");
 console.log (i <= h);   //False
 
 console.log ("Is i greater then or equal to h? I predict TRue.");
 console.log (i >= h);   //True
 
 
 //• Tests using "and" and "or" operators
 var x = 5;
 var y = 10;
 var z = 12;
 console.log ("is x < y and z > y? I predict True.");
 console.log (x < y && z > y); // True
 
 // if x is less than y or z is greater than y
 console.log ("is x < y or z > y? I predict True.");
 console.log (x < y || z > y); // True
 
 // if y divided by 2 is equal to x and z divided by 2 is equal to x
 console.log ("is (y/2) == x and (z/2) == x? I predict False. ");
 console.log ((y/2)== x && (z/2)== x); //False
 
 // Test 9:  if y divided by 2 is equal to x or z divided by 2 is equal to x
 console.log ("is (y/2) == x or (z/2) == x? I predict True. ");
 console.log ((y/2)== x || (z/2)== x); //True
 
 //• Test whether an item is in a array
 var array = [2, 3, 5, 7, 11, 13, 17, 19];
 
 console.log ("Is 7 in the array? I predict True.");
 console.log (array.includes(7));   //True
 
 console.log ("Is 9 in the array? I predict False.");
 console.log (array.includes(9));    //False
 
 //• Test whether an item is not in a array
 console.log ("Is 13 not in the array? I predict False.");
 console.log (!array.includes(13));   //False
 
 console.log("Is 15 not in the array? I predict True.");
 console.log (!array.includes(15));   //True