/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

// declared a function city_country
function city_country(city , country) {
    //return the string formate
    return (city + ', ' + country);
}

// call the function with the different city and country pairs
console.log (city_country('Islamabad', 'Pakistan'));
console.log(city_country('New Dehli', 'India'));
console.log(city_country('Kabul', 'Afghanistan'));
console.log(city_country('Tehran', 'Iran'));
console.log(city_country('Beijing', 'China'));