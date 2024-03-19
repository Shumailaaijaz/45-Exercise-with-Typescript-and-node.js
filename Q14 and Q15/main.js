"use strict";
// let guests: string[] = ['Miss hina', 'Sir Ameen', 'Sir Qasim', ];
// guests.forEach(guests =>{
//     console.log(`Dear ${guests}, would you like to join me for dinner?`);
// });
// Q15 
let guests = ['Miss hina', 'Sir Ameen', 'Sir Qasim',];
let unableToAttend = "Sir Qasim";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Sir zeeshan";
guests[guests.indexOf(unableToAttend)] = newGuest;
// new invitations
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`);
});
