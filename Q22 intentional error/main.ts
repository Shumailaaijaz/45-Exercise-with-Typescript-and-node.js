// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.




let friends: string[] = ["My mom", "Fazila", "Afsheen"];
console.log("friends"[10]);
// Intentional error: Arrays are zero-indexedDB, so index 3 is out of bound .
// friends[2] = "Fazila"; //
// correctting the error by accessing a valid index
console.log(friends[2]);