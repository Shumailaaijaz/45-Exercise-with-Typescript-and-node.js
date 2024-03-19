"use strict";
let guests = ["Miss Hina", "sir Ameen Alam", "Sir Qasim"];
console.log("Unfortunately, i can only invite two people for dinner");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`sorry, ${removedGuest}, i can't you to dinner`);
}
guests.forEach(guests => {
    console.log('Dear `${guest}`, you were still invited to dinner.');
    guests.slice(0, guests.length);
    console.log(guests);
    // shown an empty list
});
