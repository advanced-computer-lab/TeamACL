const express = require("express");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router
  .route("/")
  .get(flightController.getAllFlights)
  .post(flightController.createFLight);

router
  .route("/:id")
  .get(flightController.getFlight)
  .patch(flightController.updateFlight)
  .delete(flightController.deleteFlight);

module.exports = router;
