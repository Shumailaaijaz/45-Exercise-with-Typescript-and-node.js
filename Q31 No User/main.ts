// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// creating a array with 5 values

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
// Removing all usernames ensures The message "we need to finde some users!" is printed.
usernames = [];
// Checking if the array is empty
if (usernames.length === 0) {
    console.log("Array is empty We need to find some users!");
} else {
    // if array is not empty use forEach loop on array   
usernames.forEach(usernames =>{
    if (usernames === "admin"){
        console.log("Hello admin, would you like to see a status report");
}  else {
    console.log(`Hello ${usernames}, thank you for logging in again`);
}
});

}




