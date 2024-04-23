// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

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
