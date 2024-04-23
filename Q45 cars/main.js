"use strict";
// Cars: Write a function that stores information about a car in a Object.  The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the  information was stored correctly
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model }; // Initialize car object with manufacturer and model
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value; // Assign each option to the car object
    });
    return car;
}
console.log(make_car("Toyota", "corrolla", ["color", "red"], ["year", "2024"], ["Sunroof", true]));
