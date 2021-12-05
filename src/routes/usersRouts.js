const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/:id").put(userController.updateUser);

router.route("/").post(userController.createUser);
router.route("/ViewProfile").get(userController.viewUser)
router.route("/EditProfile").put(userController.editUser)
module.exports = router;
