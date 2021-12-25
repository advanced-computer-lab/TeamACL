const mongoose = require("mongoose");
const Reservation = mongoose.Schema({
  UserEmail: {
    type: String,
    required: true,
    unique: false,
  },
  FlightNumber: {
    type: Number,
    required: true,
  },
  ChosenCabin: {
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
