const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();
<<<<<<< HEAD
router
  .route("/findFlight")
  .post(flightController.getFlight);

=======

router.route("/flightIdpost").post(flightController.postFlightId);
router.route("/flightIdget").get(flightController.getFlightId);

router.route("/departure-flights").get(flightController.getDepartureFlights);
router.route("/return-flights").get(flightController.getReturnFlights);

router.route("/findFlight").post(flightController.getFlight);
router
  .route("/")
  .post(flightController.createFLight)
  .get(flightController.getAllFlights);

router.route("/selectedFlight").get(flightController.getSelectedFlight);
>>>>>>> final2

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
