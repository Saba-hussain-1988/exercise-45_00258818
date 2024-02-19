/* Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan. 
 Give the parameter for the country a default value. Call your function for three different cities, 
 at least one of which is not in the default country.*/


 // define the function with the default country
 function describe_city(city, country = "Pakistan") {
    //print asimple sentence describing the city and country
    console.log(city + ' is in ' + country + '.');
 }

// call the function for three different cities
describe_city("Karachi"); //with default country
describe_city("London", 'UK');
describe_city('Newyork', 'USA');