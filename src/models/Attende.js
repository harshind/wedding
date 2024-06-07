const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AttendeSchema = new Schema({
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  socialMediaHandles: {
    type: String,
    required: false,
  },
  relation: {
    type: String,
    enum: ["BEST FRIEND", "FAMILY"],
    required: true,
  },
  groomsmen: {
    type: Boolean,
    required: true,
    default: false,
  },
  bridesmaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  picture: {
    type: String,
    required: true,
  },
});

const Attende = model("Attende", AttendeSchema);

module.exports = Attende;
