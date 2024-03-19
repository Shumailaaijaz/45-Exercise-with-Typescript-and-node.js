import { reverse } from "dns";

let places: string[] = ["Madina City", "Oman", "Switzerland", "Malam Jabba"];

console.log("original order:", places);

console.log('Alphabatical order:,');
[...places].sort();

console.log('original order:', places);
console.log(' Revers Alphabatical order:');
[...places].sort (). reverse();

console.log("original order:", places);
places.reverse (); 
console.log('original order:', places);

places.sort();
console.log('Reverse alphabatical order:',places);



