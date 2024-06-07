const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const WeddingSchema = new Schema({
  wedId: {
    type: "UUID",
    default: () => randomUUID(),
  },
  age: {
    type: {
      type: Number,
      min: 18,
      max: 110,
    },
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  bride: {
    type: {
      type: String,
      required: true,
    },
  },
  groom: {
    type: {
      type: String,
      required: true,
    },
  },
  // [{thumbnail: "", video: "", active: true},{thumbnail: "", video: ""}]
  carousel: {
    type: String,
    required: true,
  },
  invite_msg: {
    type: String,
    required: true,
  },
});

const Wedding = model("Wedding", WeddingSchema);

module.exports = Wedding;
