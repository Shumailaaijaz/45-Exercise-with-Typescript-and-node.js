"use strict";
// define the function to show magician names
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// define the array of magician names
let magician_names = ["Harry", "David", "Sam"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);
