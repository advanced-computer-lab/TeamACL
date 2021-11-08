const User = require("../models/User");
// exports.createUser = (req, res) => {
//   const user = new User(req.body);
//   user
//     .save()
//     .then((result) => {
//       res.send(result);
//       console.log("added");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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
