"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// if the alien is green, print a message that the player got 5 points.
let alien_color = "green";
alien_color: "green";
// green alien version
if (alien_color === "green") {
    console.log("version 1 you shoot down the green alien and earned 5 point.");
}
else if (alien_color === "yellow") {
    console.log("you shot yellow alien and earned 10 point.");
}
else if (alien_color == "red") {
    console.log("you shot red alien and earned 15 points.");
}
// if the alien color is yellow then 
// yellow alien version 2
let alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("you shoot down the green alien and earned 5 point.");
}
else if (alien_color2 === "yellow") {
    console.log("version2 you shot yellow alien and earned 10 point.");
}
else if (alien_color2 === "red") {
    console.log("you earned 15 points.");
}
// red alien version 3
// if the alien color is "red" then player will receive 15 points.
let alien_color3 = "red";
if (alien_color3 == " green") {
    console.log("you earned 5 point.");
}
else if (alien_color3 == "yellow") {
    console.log("you earned 10 point.");
}
else if (alien_color3 == "red") {
    console.log(" versoin 3 you shot red alien and earned 15 points.");
}
