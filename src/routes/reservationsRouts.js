const express = require("express");
const reserveController = require("./../controllers/ReservationsController");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router.route("/flightDetails/:id").get(flightController.getSelectedFlight); //gets the flight details using the getSelected flight method in the flight controller!!!

router
  .route("/:UserId/:FlightId/:FlightNumber")
  .get(reserveController.getReservation);

router.route("/").post(reserveController.createReservation);

router.route("/:id").delete(reserveController.canceleReservation);

module.exports = router;
