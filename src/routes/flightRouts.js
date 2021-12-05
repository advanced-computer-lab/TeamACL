const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();
router
  .route("/findFlight")
  .post(flightController.getFlight);


router
  .route("/:id")
  .get(flightController.getSelectedFlight)  //di
  .put(flightController.updateFlight)
  .delete(flightController.deleteFlight);

// router
//   .route("/findReturnFlight")
//   .post(flightController.getReturnFlights);  
// module.exports = router;
router.route("/departure-flights").post(flightController.getDepartureFlights);
router.route("/return-flights").post(flightController.getReturnFlights);


router
  .route("/")
  .get(flightController.getAllFlights)
  
  .post(flightController.createFLight);


  module.exports = router;
