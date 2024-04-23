// Unchanged Magicians: Start with your work from Exercise 40. Call thefunction make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// define the function to show magician names
function show_magicians(magician: string[]) {
    magician.forEach(name => console.log(name));
}

function make_great(magician: string[]) {
    return magician.map(name =>`The Great ${name}`); }

    // define the array of magician names
    let magician_names = ["Harry", "David", "Sam"];

    let great_magicians = make_great (magician_names);
    show_magicians(great_magicians);
// Making a copy of Original array through.slice () function.
let copy_magician_names = magician_names.slice();

// Modify the copied array to include the Great with thier names.
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays original and copied 
// original array
console.log("\n Original Array\n")
show_magicians(magician_names);
// copied array
console.log("\n copied Array\n")
show_magicians(copy_great_magicians);    

show_magicians(copy_magician_names);
show_magicians(copy_great_magicians);
