const express = require("express");
const reserveController = require("./../controllers/ReservationsController");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router
  .route("/:id/:UserEmail/:FlightId/:FlightNumber/:ChosenCabin/:SeatNumber")
  .patch(reserveController.updateReservation);

router.route("/flightDetails/:id").get(flightController.getSelectedFlight); //gets the flight details using the getSelected flight method in the flight controller!!!

router
  .route("/:UserId/:FlightId/:FlightNumber")
  .get(reserveController.getReservation);

// UserEmail/:UserId/:FlightId
router
  .route("/:UserEmail/:UserId/:FlightId/:FlightNumber")
  .post(reserveController.createReservation);

router.route("/:id").delete(reserveController.canceleReservation);

module.exports = router;
