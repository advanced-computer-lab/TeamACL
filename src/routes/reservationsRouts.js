const express = require("express");
const reserveController = require("./../controllers/ReservationsController");
const flightController = require("./../controllers/flightController");

const router = express.Router();

<<<<<<< HEAD
router.route("/flightDetails/:id").get(flightController.getSelectedFlight); //gets the flight details using the getSelected flight method in the flight controller!!!

router
  .route("/:UserId/:FlightId/:FlightNumber")
  .get(reserveController.getReservation);

// UserEmail/:UserId/:FlightId
router
  .route("/:UserEmail/:UserId/:FlightId/:FlightNumber")
=======
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
>>>>>>> final2
  .post(reserveController.createReservation);

router.route("/:id").delete(reserveController.canceleReservation);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> final2
