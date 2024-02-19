/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then
 accept an arbitrary number of keyword arguments. Call the function with the required
  information and two other name-value pairs, such as a color or an optional feature. 
  Print the Object that’s returned to make sure all the information was stored correctly.*/ 

// Define the store_car_info function
function store_car_info(manufacturer, model, ...extras) {
    // Create an object to store car information
    var car = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through the extras and add them to the car object
    for (var i = 0; i < extras.length; i += 2) {
        var key = extras[i];
        var value = extras[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with the required information and two other name-value pairs
var carInfo = store_car_info("Toyota", "Camry", "color", "red", "year", 2022);

// Print the object that's returned to make sure all the information was stored correctly
console.log(carInfo);
