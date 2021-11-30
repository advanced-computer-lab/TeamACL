const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  BornIn: {
    type: String,
    required: true,
  },
  LivesIn: {
    type: String,
    required: true,
  },
  MartialStatus: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Job: {
    type: String,
    required: true,
  },
  PassportNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
