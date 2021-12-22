const express = require("express");
const WishListController = require("./../controllers/wishListController");

const router = express.Router();
router
  .route(
    "/:FlightNumber/:DepartureTime/:ArrivalTime/:DepartureDate/:ArrivalDate/:DurationInHrs/:DateOfFlight/:NumberOfEconomySeats/:NumberOfBusinessSeats/:NumberOfFirstClassSeats/:Airport/:DepartureTerminals/:ArrivalTerminals/:From/:To/:TotalTicketPrice/:BaggageAllowance/:TypeOfFlight"
  )
  .post(WishListController.addToWishList);

router.route("/").get(WishListController.getWishList);

module.exports = router;
