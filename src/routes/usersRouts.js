const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

router.route("/home")

router.route("/ViewProfile").get(userController.viewUser)
router.route("/EditProfile").put(userController.EditProfile)
module.exports = router;
