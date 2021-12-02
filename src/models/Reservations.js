const mongoose = require("mongoose");
const Reservation = mongoose.Schema({
  UserEmail: {
    type: String,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  FlightId: {
    type: String,
    required: true,
  },
  FlightNumber: {
    type: Number,
    required: true,
  },
  ChosenCabin: {
    type: String,
    required: true,
  },
  NumberOfSeats: {
    type: Number,
    required: true,
  },
});

const Reserve = mongoose.model("Reserve", Reservation);
module.exports = Reserve;
