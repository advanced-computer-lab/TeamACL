const express = require("express");
const reserveController = require("./../controllers/ReservationsController");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router
  .route("/:id/:UserEmail/:FlightId/:FlightNumber/:ChosenCabin/:SeatNumber")
  .patch(reserveController.updateReservation);

router
  .route("/flightDetails/FlightNumber")
  .get(flightController.getSelectedFlight); //gets the flight details using the getSelected flight method in the flight controller!!!

router.route("/:UserEmail").get(reserveController.getReservation);
router.route("/").get(reserveController.getAllReservations);

// UserEmail/:UserId/:FlightId
router
  .route("/:UserEmail/:FlightNumber")
  .post(reserveController.createReservation);

router.route("/:id").delete(reserveController.canceleReservation);

module.exports = router;
