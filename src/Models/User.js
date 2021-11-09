const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true
  },
  FlightDate: {
    type: Date,
    required: true,
  },
  Cabin: {
    type: String,
    required: true
  },
  SeatsAvailableOnFlight
: {
    type: Number,
    required: true
  },
  
}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', userSchema);
module.exports = User;