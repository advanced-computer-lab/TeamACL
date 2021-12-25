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
<<<<<<< HEAD
    type:String,
    required: true,
  },
  ArrivalDate: {
    type:String,
    required: true,
  },
  DurationInHrs:{
    type:Number,
=======
    type: String,
    required: true,
  },
  ArrivalDate: {
    type: String,
    required: true,
  },
  DurationInHrs: {
    type: Number,
>>>>>>> final2
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
  AvailiableSeatsInEconomy: {
    type: Array,
  },
  AvailableSeatsInBusiness: {
    type: Array,
  },
  AvailableSeatsInFirstClass: {
    type: Array,
  },
  ReservedSeatsInEconomy: {
    type: Array,
  },
  ReservedSeatsInBusiness: {
    type: Array,
  },
  ReservedSeatsInFirstClass: {
    type: Array,
  },
  Airport: {
    type: String,
    required: true,
  },
  DepartureTerminals: {
<<<<<<< HEAD
  type: String,
  required: true,
=======
    type: String,
    required: true,
>>>>>>> final2
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
<<<<<<< HEAD
     type: String,
     required: true,
  },
  Cabin: {
     type: String,
      required: true,
=======
    type: String,
    required: true,
>>>>>>> final2
  },
});
const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
