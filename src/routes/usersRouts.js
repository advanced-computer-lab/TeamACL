const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/:id").put(userController.updateUser);

//Authentication
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/logout").post(userController.logout);
//End Authentication

module.exports = router;
