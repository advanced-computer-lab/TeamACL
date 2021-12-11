const { findOne } = require("../models/Flight");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      Age,
      BornIn,
      LivesIn,
      MartialStatus,
      PhoneNumber,
      Job,
      PassportNumber,
    } = req.body;

    const oldUser = await User.findOne({ Email });
    if (oldUser) {
      return res.status(409).send("User already existss");
    }

    const newUser = await User.create({
      FirstName,
      LastName,
      Email,
      Password,
      Age,
      BornIn,
      LivesIn,
      MartialStatus,
      PhoneNumber,
      Job,
      PassportNumber,
    });
    const token = jwt.sign({ Email }, "process.env.TOKEN_KEY");
    // User.Token = token;
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        User: newUser,
        Token: token,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
  }
};

exports.updateUser = async (req, res) => {
  console.log(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        User: updatedUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};
