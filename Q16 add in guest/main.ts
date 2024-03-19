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

