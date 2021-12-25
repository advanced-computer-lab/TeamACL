const express = require("express");
const WishListController = require("./../controllers/wishListController");

const router = express.Router();
<<<<<<< HEAD
router
  .route(
    "/:FlightNumber/:DepartureTime/:ArrivalTime/:DepartureDate/:ArrivalDate/:DurationInHrs/:DateOfFlight/:NumberOfEconomySeats/:NumberOfBusinessSeats/:NumberOfFirstClassSeats/:Airport/:DepartureTerminals/:ArrivalTerminals/:From/:To/:TotalTicketPrice/:BaggageAllowance/:TypeOfFlight/:Cabin"
  )
  .post(WishListController.addToWishList);

router.route("/").get(WishListController.getWishList);

module.exports = router;
=======
router.route("/addToWishList").post(WishListController.addToWishList);
router.route("/:id").delete(WishListController.delete);
router.route("/:UserEmail").get(WishListController.getWishList);
router.route("/").get(WishListController.getAll);

module.exports = router;
>>>>>>> final2
