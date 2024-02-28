var PersonName = "Shumaila";
// Upper Case
console.log("UpperCase:", PersonName.toUpperCase());
// LowerCase
console.log("LowerCase:", PersonName.toLowerCase());
// titleCase
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
