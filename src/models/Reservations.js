const mongoose = require("mongoose");
const Reservation = mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },
  FlightId: {
    type: String,
    required: true,
  },
  SeatNumber: {
    type: String,
    required: true,
  },
});
