
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
  console.log(`Making a ${size} t-shirt  and the message is ${message} printed on it.`);
}       
make_shirt(); //default large and message
make_shirt("medium"); //medium and default message
make_shirt("small", "Coding is  passion"); //small and custom message
