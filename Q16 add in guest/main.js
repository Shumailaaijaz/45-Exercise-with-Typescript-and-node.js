// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.




"use strict";
// Q16 
let guests = ['Miss hina', 'Sir Ameen', 'Sir Qasim',];
console.log("Great News! I found a bigger dinner table!");
// let unableToAttend = "Sir Qasim";
// console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
// let newGuest = "Sir zeeshan";
// guests[guests.indexOf(unableToAttend)] = newGuest;
// new invitations
// adding more guest
guests.unshift('Sir zia');
guests.splice(guests.length / 2, 0, 'Sir Daniyal');
guests.push('Sir Kamran_tessori');
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`);
});
