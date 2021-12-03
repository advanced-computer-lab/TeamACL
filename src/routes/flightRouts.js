const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();
router
  .route("/findFlight")
  .get(flightController.getFlight);
router
  .route("/")
  .get(flightController.getAllFlights)
  
  .post(flightController.createFLight);

router
  .route("/:id")
  .put(flightController.updateFlight)
  .delete(flightController.deleteFlight);

module.exports = router;
