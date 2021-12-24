const express = require("express");
const WishListController = require("./../controllers/wishListController");

const router = express.Router();
router.route("/addToWishList").post(WishListController.addToWishList);

router.route("/").get(WishListController.getWishList);

module.exports = router;
