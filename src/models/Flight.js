const mongoose = require("mongoose");
const flightSchema = mongoose.Schema({
  FlightNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  DepartureTime: {
    type: String,
    required: true,
  },

  ArrivalTime: {
    type: String,
    required: true,
  },
  DepartureDate: {
    type:String,
    required: true,
  },
  ArrivalDate: {
    type:String,
    required: true,
  },
  DurationInHrs:{
    type:Number,
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
  NumberOfFirstClassSeats: {
    type: Number,
    required: true,
  },
  Airport: {
    type: String,
    required: true,
  },
  DepartureTerminals: {
  type: String,
  required: true,
  },
  ArrivalTerminals: {
    type: String,
    required: true,
    },

  // AirportTerminals: {
  //   type: String,
  //   required: true,
  // },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  TotalTicketPrice: {
    type: Number,
    required: true,
  },
  BaggageAllowance: {
    type: Number,
    required: true,
  },
  TypeOfFlight: {
     type: String,
     required: true,
  },
  Cabin: {
     type: String,
      required: true,
  },
});
const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
