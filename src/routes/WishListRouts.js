const express = require("express");
const WishListController = require("./../controllers/wishListController");

const router = express.Router();
router.route("/addToWishList").post(WishListController.addToWishList);
router.route("/:id").delete(WishListController.delete);
router.route("/:UserEmail").get(WishListController.getWishList);
router.route("/").get(WishListController.getAll);

module.exports = router;
