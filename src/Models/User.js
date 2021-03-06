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
  IsAdmin: {
    type: Boolean,
    default: false,
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
  CountryCode: {
    type: String,
    required: true,
  },
  HomeAddress: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Token: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
