const { findByIdAndDelete, findById } = require("../models/User");
const Reserve = require("./../models/Reservations");
const Flight = require("./../controllers/flightController");

/* we will recieve the FLight info in the params, and recieve the number of seats and chosen cabin in the body
  1) we need to get the number of the seats availiable in the chosen cabin in the flight through accesssing it by quering it
  and then subtracting it and then updating it in the flight schema

*/
exports.createReservation = async (req, res) => {
  try {
    const UserEmail = req.params.UserEmail;
    const UserId = req.params.UserId;
    const FlightId = req.params.FlightId;
    const FlightNumber = Number(req.params.FlightNumber); //convert it to number
    const ChosenCabin = req.body.ChosenCabin;
    const NumberOfSeats = Number(req.body.NumberOfSeats);
    console.log(req.params);
    console.log(req.body);

    const reservation = await Reserve.create({
      UserEmail,
      UserId,
      FlightId,
      FlightNumber,
      ChosenCabin,
      NumberOfSeats,
    });
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
    const UserId = req.params.UserId;
    const FlightId = req.params.FlightId;
    const FlightNumber = req.params.FlightNumber;
    console.log(req.params);
    console.log(UserId, FlightId, FlightNumber);
    const reservation = await Reserve.find({
      UserId: UserId,
      FlightId: FlightId,
      FlightNumber: FlightNumber,
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

// get reserved flight details is done in the router by directing it to the function called getSelectedFLight in the flight controller.
//this can be called the summary of the choosen flight

//remaining the cart if needed
