const { findByIdAndDelete, findById } = require("../models/User");
const Reserve = require("./../models/Reservations");
const Flight = require("./../controllers/flightController");

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
    // const UserId = req.query.UserID; //make sure that req.query is the correct one --> it might need to be changed to req.params
    // const FlightId = req.query.FlightId; //make sure that req.query is the correct one --> it might need to be changed to req.params
    // console.log(UserId, FlightId);
    console.log(req.params.id);
    const reservation = await Reserve.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: reservation,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
