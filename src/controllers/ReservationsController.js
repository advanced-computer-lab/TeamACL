const { findByIdAndDelete } = require("../models/User");
const Reserve = require("./../models/Reservations");

exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reserve.create(req.params);
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
    const UserId = req.params.userId;
    const FlightId = req.params.flightId;
    const reservation = await Reserve.find({
      UserId: UserId,
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
    const FlightId = req.params.flightId;
    const UserId = req.params.userId;
    const reservation = await findByIdAndDelete(FlightId, UserId);
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
