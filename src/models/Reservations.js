const mongoose = require("mongoose");
const Reservation = mongoose.Schema({
  UserEmail: {
    type: String,
    required: true,
  },
  UserID: {
    type: String,
    required: true,
  },
  FlightId: {
    type: String,
    required: true,
  },
  FlightNumber: {
    type: String,
    required: true,
  },
  SeatNumber: {
    type: String,
    required: true,
  },
});

const Reserve = mongoose.model("Reserve", Reservation);
module.exports = Reserve;
