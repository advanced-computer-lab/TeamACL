const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  First_Name: {
    type: String,
    required: true,
  },
  Last_Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Birth_Date: {
    type: Date,
    required: true,
  },
  LivesIn: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  
  PhoneNumber: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  }
}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', userSchema);
module.exports = User;