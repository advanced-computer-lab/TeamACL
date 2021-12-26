const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
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
      IsAdmin: req.body.IsAdmin,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Password: req.body.Password,
      Age: req.body.Age,
      BornIn: req.body.BornIn,
      LivesIn: req.body.LivesIn,
      MartialStatus: req.body.MartialStatus,
      Job: req.body.Job,
    };

    const salt = bcrypt.genSaltSync(10);
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
    console.log(userEmail);
    console.log(userNewPass);

    const userExist = await User.find({ Email: userEmail });
    const userPass = userExist[0].Password;
    const IsAdmin = userExist[0].IsAdmin;
    console.log(userPass);
    console.log(userExist);
    console.log(IsAdmin);
    if (!userExist)
      return res.status(404).json({
        status: "fail",
        massege: err,
      });

    if (!bcrypt.compareSync(userNewPass, userPass)) {
      console.log("yyyy");
      return res.status(404).json({
        status: "fail",
        massege: err,
      });
    }

    const token = jwt.sign({ userId: userExist._id }, "SECRET", {
      expiresIn: "1h",
    });
    console.log("=======>", token);

    res.status(200).json({
      status: "success",
      data: {
        token,
        IsAdmin,
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

    await User.deleteOne({ user });

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
    console.log(err);
  }
};
//End Authentication

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
