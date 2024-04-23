"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// define variable  
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
// Equality with strings
console.log("Testing equality with string");
console.log("Is apple is equal to apple");
console.log("apple" == "apple"); // true
// inequality with strings
console.log("Testing inequality with string");
console.log("\nIs apple is not equal to apple");
console.log("apple" != "apple"); //false
//  using the lower case function and equality with strings
console.log("\nIs apple is equal to apple (using the lower case function)?");
console.log(uppercaseApple.toLowerCase() == "apple"); //true
// inequality with strings (using the lower case function"
console.log("\nIs apple is not equal to apple (using the lower case function)?");
console.log(uppercaseApple.toLowerCase() !== "apple"); //fals
// Numerical tests
console.log("\n Numerical test");
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty); //false
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty); //true
console.log("\n Is ten is greater than twenty?");
console.log(ten > twenty); //false
console.log("\n Is ten is less than twenty?");
console.log(ten < twenty); //true
console.log("\n Is ten is greater than or equal to twenty?");
console.log(ten >= twenty); //false
console.log("\n Is ten is less than or equal to twenty?");
console.log(ten <= twenty); //true
// Tests using "and" and "or" operators
console.log("\n Tests using \"and\" and \"or\" operators ");
console.log("twenty is not  equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); //true
console.log("twenty is not  equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30); //false
// using ||(or) operator
console.log("\n 20 is greater than 50 OR 20 is qual to 20");
console.log(twenty > 50 || twenty == 20); //true
console.log("\n 20 is greater than 50 OR 20 is not qual to 20");
console.log(twenty > 50 || twenty !== 20);
// Test whether an item is in a array
console.log("\n Test whether an item is in a array");
let fruits = ["apple", "banana", "cherry"];
console.log("\n Is 'apple' include in my fruits array?");
console.log(fruits.includes("apple")); //true
// test whether an item is not in a array
console.log("\n Is 'mango' is not in my fruit array?");
console.log(fruits.includes("apple")); // true '''||
