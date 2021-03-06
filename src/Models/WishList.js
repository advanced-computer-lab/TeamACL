const mongoose = require("mongoose");
const wishListSchema = mongoose.Schema({
  FlightNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  UserEmail: {
    type: String,
    required: true,
    unique: false,
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
    type: String,
    required: true,
  },
  ArrivalDate: {
    type: String,
    required: true,
  },
  DurationInHrs: {
    type: Number,
    required: true,
  },
  DateOfFlight: {
    type: String,
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
});
const WishList = mongoose.model("WishList", wishListSchema);
module.exports = WishList;
