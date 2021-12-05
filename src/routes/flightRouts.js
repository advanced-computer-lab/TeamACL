const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

router.route("/departure-flights").get(flightController.getDepartureFlights);
router.route("/return-flights").get(flightController.getReturnFlights);

router.route("/findFlight").post(flightController.getFlight);
router
  .route("/")
  .post(flightController.createFLight)
  .get(flightController.getAllFlights);

router
  .route("/:id")
  .get(flightController.getSelectedFlight)
  .put(flightController.updateFlight)
  .delete(flightController.deleteFlight);

module.exports = router;
