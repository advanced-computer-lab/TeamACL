const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

 router.route("/:id").put(userController.updateUser); //di 

router.route("/add-user").post(userController.createUser);

router.route("/").get(userController.viewUser)
// router.route("/EditProfile").put(userController.editUser)

module.exports = router;
