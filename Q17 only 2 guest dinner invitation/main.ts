// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

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

// inform that only two guests  can be invited for dinner
console.log("Unfortunately, the new dinner table was not available On  the time, so i can only invite two guests for dinner.");

//  Using while- loop to remove guests from the Array until only two guests are invited or remain.
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(` sorry, ${removedGuest} can't make it to dinner.`);
}

// sending invitations to the last two guests on the list.
console.log ("Invitations for the last two guests");
guests.forEach(Lasttwo => console.log(`Dear luckyly ${Lasttwo}, you are still invited to dinner.`));

// removing last two Guest from the list

guests.pop();
guests.pop();
console.log("Emptying the list:" , guests);