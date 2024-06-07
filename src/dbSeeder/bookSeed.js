require("../config/dbConfig");
const Book = require("../models/book");

const saveBook = async () => {
  const newBook = new Book({
    title: "The world as I see it",
    summary:
      "Albert Einstein believes in humanity, in a peaceful world of mutual helpfulness, and in the high mission of science. This book is intended as a plea for this belief at a time which compels every one of us to overhaul his mental attitude and his ideas.",
    isbn: "978-0806527901",
    author: "5f40b24eeac6a40bde501218"
  });
  //saveBook();
  try {
    const result = await newBook.save();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};
const findBook = async () => {
  const result = await Book.find().populate("author", "first_name last_name");
  console.log(result);
};

findBook();
