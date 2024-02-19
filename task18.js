/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Initialize an array of places to visited
var placesToVisit = ["Makkah", "Madina", "Gilgit", "China", "Dubai"];

//print the array in its original order
console.log ("Original order:" + placesToVisit);

//print the array in alphabetical order without modifying the actual list
console.log ("Alphabetical order:" + [...placesToVisit].sort());

//show, the array is still in its original order
console.log ("Original order is still intact:" + placesToVisit);

//print the array in reverse alphabetical order with out change the original list
console.log ("Rverse Alphabetical order:" + [...placesToVisit].sort().reverse());

//show, the array is still in its original order
console.log ("Original order is still intact:" + placesToVisit);

//Reverse the order of the list
placesToVisit.reverse();
//print the array, its order has changed
console.log ("Array changed into reverse order:" + placesToVisit);

// Reverse the order of the list again to bring it back to its original order
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("Back to original order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array to change it to reverse alphabetical order
placesToVisit.sort().reverse();

// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);