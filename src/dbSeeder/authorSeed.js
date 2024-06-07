require("../config/dbConfig");

const Author = require("../models/author");

const saveAuthor = async () => {
  const newAuthor = new Author({
    first_name: "Albert",
    last_name: "Einstein",
    field_of_study: "Non-Fiction",
    date_of_birth: new Date(1879, 2, 14)
  });
  try {
    const result = await newAuthor.save();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
saveAuthor();
const id = "";

const findAllAuttor = async () => {
  const result = await Author.find();
  console.log(result);
};

const findAuthorById = async () => {
  const result = await Author.findByid(id);
  console.log(result);
};
const findByProp = async () => {
  const result = await Author.findOne({
    first_name: "Albert"
  });
  console.log(result);
};

const findAndUpdate = async () => {
  // first query doesn't return updated values
  const result = await Author.findOneAndUpdate(
    {
      first_name: "Albert"
    },
    {
      field_of_study: "non-fiction"
    }
  );
  const updatedValues = await Author.findOne({
    first_name: "Albert"
  });
  console.log(updatedValues);
};

findAndUpdate();
