const express = require("express");
const reserveController = require("./../controllers/ReservationsController");

const router = express.Router();

router
  .route("/")
  .post(reserveController.createReservation)
  .get(reserveController.getReservation);

router.route("/:id").delete(reserveController.canceleReservation);

module.exports = router;
