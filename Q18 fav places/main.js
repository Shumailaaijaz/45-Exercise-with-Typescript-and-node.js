"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["Madina City", "Turkey", "venice", "Oman", "Switzerland"];
console.log("original order:", places);
// print the array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:", [...places].sort());
console.log("original order:", places);
console.log("Reverse of alphabatical order:", [...places].sort().reverse());
console.log(" Still original order:", places);
places.reverse();
console.log(" Reversed order:", places);
places.reverse();
console.log(" Original order:", places);
places.sort();
console.log('Reverse alphabatical order:', places);
// console.log( `Reverse order of original Array:  `+ [...places].sort (). reverse());
console.log("Reverse order of original Array:", places.reverse());
