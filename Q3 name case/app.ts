// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName: String ="Shumaila"
// Upper Case
console.log("UpperCase:", PersonName.toUpperCase());

// LowerCase
console.log("LowerCase:", PersonName.toLowerCase());

// titleCase
console.log("titlecase:", PersonName. replace(/\bw/g, c => c.toUpperCase()));

