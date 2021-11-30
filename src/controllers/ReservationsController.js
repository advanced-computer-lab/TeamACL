const { findByIdAndDelete } = require("../models/User");
const Reserve = require("./../models/Reservations");

exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reserve.create(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        Reserve: reservation,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const UserId = req.query.UserID;
    const FlightId = req.query.FlightId;
    console.log(UserId, FlightId);
    const reservation = await Reserve.find({
      UserID: UserId,
      FlightId: FlightId,
    });
    res.status(200).json({
      status: "success",
      data: {
        Reserve: reservation,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

exports.canceleReservation = async (req, res) => {
  try {
    const UserId = req.query.UserID;
    const FlightId = req.query.FlightId;
    const reservation = await findByIdAndDelete({
      UserID: UserId,
      FlightId: FlightId,
    });
    res.status(200).json({
      status: "success",
      data: flight,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
