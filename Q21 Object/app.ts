// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



let book: { title: string; author: string; yearPublished: number } = {
  title: "Essential TypeScript_5 Third Edition",
  author: "Adam Freeman",
  yearPublished: 2023,
};
console.log(
  `BookInfo: ${book.title} by ${book.author}, published in ${book.yearPublished}`
);
