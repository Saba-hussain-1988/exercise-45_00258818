/*Task 23: Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for the results of each test.
  Create at least 10 tests. 
  Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

  var x = "10";
  var y = 10;
  var z = 12;
  var city = "Karachi";

// Test 1: if y isn`t equal to z
console.log ("Is y !== z? I predict True.");
console.log (y !== z); //True

// Test 2: if y is equal to x 
console.log (`Is y === x? I predict False`);
console.log (y === x); // False

// Test 3:  if y is not equal to x 
console.log (`Is y !== x? I predict True`);
console.log (y !== x); // True


// Test 4:  if y is equal to x 
console.log (`Is y == x? I predict True`);
console.log (y == x); // True

// Test 5:  if y is not equal to x 
console.log (`Is y != x? I predict False`);
console.log (y != x); // False

// Test 6: if x is less than y and z is greater than y
console.log ("is x < y and z > y? I predict False.");
console.log (x < y && z > y); // False

//Test 7:  if x is less than y or z is greater than y
console.log ("is x < y or z > y? I predict True.");
console.log (x < y || z > y); // True

// Test 8: if y divided by 2 is equal to 5 and z divided by 2 is equal to x
console.log ("is (y/2) == 5 and (z/2) == x? I predict False. ");
console.log ((y/2)== 5 && (z/2)== x); //False

// Test 9:  if y divided by 2 is equal to 5 or z divided by 2 is equal to x
console.log ("is (y/2) == 5 or (z/2) == x? I predict True. ");
console.log ((y/2)== 5 || (z/2)== x); //True

//Task 10: if city is equal to "Karachi"
console.log ("is city == `Karachi`? I predict True");
console.log (city == `Karachi`); //True

//Task 11: if city is equal to "Hyderabad"
console.log (" Is city == `Hyderabad`? I predict False.");
console.log (city == `Hyderabad`); //False

// Task 12: if type of x is a number
console.log ("Is typeof x == `number`? I predict false.");
console.log (typeof x == `number`); //false

