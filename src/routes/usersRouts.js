const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

<<<<<<< HEAD
router.route("/:id").put(userController.updateUser); //di

router.route("/ViewProfile").get(userController.viewUser);
router.route("/EditProfile").put(userController.editUser);

router.route("/").post(userController.createUser);
=======
router.route("/:id").put(userController.updateUser);

//Authentication
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/logout").post(userController.logout);
//End Authentication
>>>>>>> final2

module.exports = router;
