const express = require("express");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router
  .route("/")
  .get(flightController.getAllFlights)
  .post(flightController.getFlight)
  .post(flightController.createFLight);

router
  .route("/:id")
  .get(flightController.getSelectedFlight)
  .put(flightController.updateFlight)
  .delete(flightController.deleteFlight);

module.exports = router;
