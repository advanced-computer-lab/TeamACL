const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  LivesIN: {
    type: String,
    required: true
  },
  DateOfBirth: {
    type: date,
    required: true
  },
 Gender: {
    type: date,
    required: true
  },


}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', adminSchema);
module.exports = User;