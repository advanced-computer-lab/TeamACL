const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

   FlightNumber: {
    type: String,
    required: true,
  },
  DepartureTime: {
    type: String,
    required: true
  },
  
  ArrivalTime: {
    type: String,
    required: true
  },
 
  DateOfFlight: {
    type: Date,
    required: true
  },
  NumberOfEconomySeats: {
    type: Number,
    required: true
  },
  NumberOfBusinessSeats: {
    type: Number,
    required: true
  },
  Airport: {
    type: String,
    required: true
  },
  AirportTerminals: {
    type: String,
    required: true
  },
 


}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', adminSchema);
module.exports = Flight;