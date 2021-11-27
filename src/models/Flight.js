const mongoose = require("mongoose");
const flightSchema = mongoose.Schema({
  FlightNumber: {
    //needs to be unique....change it later!!!!
    type: Number,
    required: true,
  },
  DepartureTime: {
    type: String,
    required: true,
  },

  ArrivalTime: {
    type: String,
    required: true,
  },

  DateOfFlight: {
    type: String,
    required: true,
  },
  NumberOfEconomySeats: {
    type: Number,
    required: true,
  },
  NumberOfBusinessSeats: {
    type: Number,
    required: true,
  },
  NumberOfFirstSeats: {
    type: Number,
    required: true,
  },
  Airport: {
    type: String,
    required: true,
  },
  AirportTerminals: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
});
const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
