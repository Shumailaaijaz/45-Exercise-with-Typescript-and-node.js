// Q2 exercise
var PersonName = "Eric";
console.log("Hello ".concat(PersonName, " would you like to learn some Python today? "));

// Q3 exercise
var PersonName = "Shumaila";
// Upper Case
console.log("UpperCase:", PersonName.toUpperCase());
// LowerCase
console.log("LowerCase:", PersonName.toLowerCase());
// titleCase
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

// Q4 exercise coding
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said,\"").concat(quote));

// Q5 exercise coding
var qoute = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, ").concat(qoute);
console.log(message);

// Q12 exercise coding
var members = ['Rfatima', 'Fazila', 'Rabia', 'Nafeesa', 'Sehar'];
var message = 'Ramadan schedule of classes has be announced @';
for (var i = 0; i < members.length; i++) {
    console.log(message + members[i]);
}
// Q16
// Q16 
let guests: string[] = ['Miss hina', 'Sir Ameen', 'Sir Qasim', ];
console.log("Great News! I found a bigger dinner table!");
// let unableToAttend = "Sir Qasim";
// console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
// let newGuest = "Sir zeeshan";
// guests[guests.indexOf(unableToAttend)] = newGuest;
// new invitations
// adding more guest
guests. unshift ('Sir zia');
guests.splice (guests.length /2,0,'Sir Daniyal');
guests.push('Sir Kamran_tessori');
guests.forEach(guest =>{
    console.log(`Dear ${guest} would you like to join me for dinner?`);
});

