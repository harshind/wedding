const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MediaSchema = new Schema({
  // images[{uri, event} video [{uri, event}]
  images: {
    type: String,
    required: true,
  },
  videos: {
    type: String,
    required: true,
  },
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
    required: true,
  },
});

const Book = model("Media", MediaSchema);

module.exports = Book;
