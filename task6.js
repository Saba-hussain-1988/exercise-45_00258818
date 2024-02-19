/*Task 6: Stripping Names:
 Store a person’s name,
  and include some whitespace characters at the beginning and end of the name.
   Make sure you use each character combination, "\t" and "\n", at least once.*/

   var personName = "\t \n   Hashir Ahmed   \n \t";

   // Print the name with white space,
   console.log ("Name with whitespace: " + personName);
   // so the whitespace around the name is displayed.
   
   // stripping white spaces,
   var strippedName = personName.trim();
   
   // Then print the name after striping the white spaces.
   console.log ("\nName after stripping whitespaces: " + strippedName);