const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();
router
  .route("/findFlight")
  .post(flightController.getFlight);
router
  .route("/")
  .get(flightController.getAllFlights)
  
  .post(flightController.createFLight);

router
  .route("/:id")
  .get(flightController.getSelectedFlight)  //di
  .put(flightController.updateFlight)
  .delete(flightController.deleteFlight);

// router
//   .route("/findReturnFlight")
//   .post(flightController.getReturnFlights);  
// module.exports = router;
