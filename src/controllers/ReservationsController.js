const { findByIdAndDelete, findById } = require("../models/User");
const Reserve = require("./../models/Reservations");
<<<<<<< HEAD
const Flight = require("./../controllers/flightController");
=======
const Flight = require("./../models/Flight");
// const Flight = require("./../controllers/flightController");
>>>>>>> final2

/* we will recieve the FLight info in the params, and recieve the number of seats and chosen cabin in the body
  1) we need to get the number of the seats availiable in the chosen cabin in the flight through accesssing it by quering it
  and then subtracting it and then updating it in the flight schema

*/
<<<<<<< HEAD
=======

>>>>>>> final2
exports.createReservation = async (req, res) => {
  try {
    const UserEmail = req.params.UserEmail;
    const UserId = req.params.UserId;
    const FlightId = req.params.FlightId;
    const FlightNumber = Number(req.params.FlightNumber); //convert it to number
    const ChosenCabin = req.body.ChosenCabin;
<<<<<<< HEAD
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
=======
    const SeatNumber = req.body.SeatNumber;
    // console.log(req.params);
    console.log(`Cabin =====>${ChosenCabin}`, `SeatNumber ====>${SeatNumber}`);
    const reservation = await Reserve.create({
      UserEmail,
      FlightNumber,
      ChosenCabin,
      SeatNumber,
    });

    const flight = await Flight.findOne({ FlightNumber }); //gets null
    if (!flight) console.log("there is a problem", FlightId);

    console.log("the flight is ====>", flight);

    let newFlight;
    let AvailiableSeatsInEconomy;
    let AvailableSeatsInBusiness;
    let AvailableSeatsInFirstClass;

    //in case the chosen cabin in economy..........
    if (ChosenCabin === "Economy") {
      AvailiableSeatsInEconomy = flight.AvailiableSeatsInEconomy;
      const index = AvailiableSeatsInEconomy.indexOf(SeatNumber);
      console.log(AvailiableSeatsInEconomy, `this is the index ==> ${index}`);
      const ReservedSeatsInEconomy = flight.ReservedSeatsInEconomy;
      ReservedSeatsInEconomy.push(SeatNumber);

      AvailiableSeatsInEconomy.splice(index, 1);

      newFlight = await Flight.findByIdAndUpdate(FlightId, {
        ReservedSeatsInEconomy,
        AvailiableSeatsInEconomy,
      });
    }
    //in case the chosen cabin is business.......
    else if (ChosenCabin === "Business") {
      AvailableSeatsInBusiness = flight.AvailableSeatsInBusiness;
      console.log(
        "Avaliable seats in business =====>",
        AvailableSeatsInBusiness
      );
      const index = AvailableSeatsInBusiness.indexOf(SeatNumber);
      const ReservedSeatsInBusiness = flight.ReservedSeatsInBusiness;
      ReservedSeatsInBusiness.push(SeatNumber);
      AvailableSeatsInBusiness.splice(index, 1);
      newFlight = await Flight.findByIdAndUpdate(FlightId, {
        ReservedSeatsInBusiness,
        AvailableSeatsInBusiness,
      });
    }
    //in case the chosen cabin is first class...............
    else {
      AvailableSeatsInFirstClass = flight.AvailableSeatsInFirstClass;
      console.log(
        "Avaliable seats in first class =====>",
        AvailableSeatsInFirstClass
      );
      const index = AvailableSeatsInFirstClass.indexOf(SeatNumber);
      const ReservedSeatsInFirstClass = flight.ReservedSeatsInFirstClass;
      ReservedSeatsInFirstClass.push(SeatNumber);
      AvailableSeatsInFirstClass.splice(index, 1);
      newFlight = await Flight.findByIdAndUpdate(FlightId, {
        ReservedSeatsInFirstClass,
        AvailableSeatsInFirstClass,
      });
    }
    //if all seats are reserved then delete the flight from the list of availiable flights
    // if (
    //   AvailiableSeatsInEconomy.length === 0 &&
    //   AvailableSeatsInBusiness.length === 0 &&
    //   AvailableSeatsInFirstClass.length === 0
    // )
    //   await Flight.findByIdAndDelete(FlightId);

>>>>>>> final2
    res.status(200).json({
      status: "success",
      data: {
        Reserve: reservation,
<<<<<<< HEAD
=======
        Flight: newFlight,
>>>>>>> final2
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
<<<<<<< HEAD
=======
    console.log(err);
>>>>>>> final2
  }
};

exports.getReservation = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const UserEmail = req.params.UserEmail;
    const FlightId = req.params.FlightId;
    const FlightNumber = Number(req.params.FlightNumber);
    console.log(req.params);
    console.log(UserEmail, FlightId, FlightNumber);
    const reservation = await Reserve.find({
      UserEmail: UserEmail,
    });
    console.log(reservation);
    res.status(200).json({
      status: "success",
      results: reservation.length,
      data: {
        reservation,
>>>>>>> final2
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
<<<<<<< HEAD
=======
    console.log(err);
  }
};
exports.getAllReservations = async (req, res) => {
  try {
    const reservation = await Reserve.find();
    res.status(200).json({
      status: "success",
      results: reservation.length,
      data: {
        reservation,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
    console.log(err);
>>>>>>> final2
  }
};

exports.canceleReservation = async (req, res) => {
  try {
<<<<<<< HEAD
    // const UserId = req.query.UserID; //make sure that req.query is the correct one --> it might need to be changed to req.params
    // const FlightId = req.query.FlightId; //make sure that req.query is the correct one --> it might need to be changed to req.params
    // console.log(UserId, FlightId);
    console.log(req.params.id);
=======
    //we need to remove the cancelled chair from the array
>>>>>>> final2
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
<<<<<<< HEAD
// get reserved flight details is done in the router by directing it to the function called getSelectedFLight in the flight controller.
//this can be called the summary of the choosen flight
=======

// get reserved flight details is done in the router by directing it to the function called getSelectedFLight in the flight controller.
//this can be called the summary of the choosen flight

//remaining the cart if needed

exports.updateReservation = async (req, res) => {
  try {
    const ReservationId = req.params.id;
    const FlightId = req.params.FlightId;
    const SeatNumber = req.params.SeatNumber;

    const updatedReservation = await Reserve.findByIdAndUpdate(ReservationId, {
      SeatNumber,
    });
    res.status(200).json({
      status: "success",
      data: {
        Reserve: updatedReservation,
        Flight: newFlight,
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
>>>>>>> final2
