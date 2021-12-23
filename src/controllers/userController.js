const User = require("../models/User");
const bcrypt = require("bcrypt");

//Authentication

//register
exports.register = async (req, res) => {
  try {
    const data = {
      HomeAddress: req.body.HomeAddress,
      CountryCode: req.body.CountryCode,
      PassportNumber: req.body.PassportNumber,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Password: req.body.Password,
    };

    const salt = await genSaltSync(10);
    hashPass = data.Password = bcrypt.hashSync(data.Password, salt);

    await User.create(data);

    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
    console.log(err);
  }
};

//login
exports.login = async (req, res) => {
  try {
    const userEmail = req.body.Email;
    const userNewPass = req.body.Password;

    const userExist = await User.find({ Email: userEmail });
    const userPass = await User.find({ Password: userNewPass });

    if (!userExist)
      return res.status(404).json({
        status: "fail",
        massege: err,
      });

    if (!bcrypt.compareSync(userNewPass, userPass))
      return res.status(404).json({
        status: "fail",
        massege: err,
      });

    const token = jwt.sign({ userId: userExist._id }, {});

    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

//logout
exports.logout = async (req, res) => {
  try {
    const userToken = req.body.userToken;

    const user = await User.find({ Token: userToken });

    if (!user)
      return res.status(404).json({
        status: "fail",
        massege: err,
      });

    await User.deleteOne(user);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};
//End Authentication

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (err) {
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
