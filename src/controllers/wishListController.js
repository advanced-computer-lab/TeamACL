const WishList = require("./../models/WishList");
const FLights = require("./../models/Flight");
const Flight = require("./flightController");

exports.addToWishList = async (req, res) => {
  try {
<<<<<<< HEAD
    const FlightNumber = Number(req.params.FlightNumber);
    const DepartureTime = req.params.DepartureTime;
    const ArrivalTime = req.params.ArrivalTime;
    const DepartureDate = req.params.DepartureDate;
    const ArrivalDate = req.params.ArrivalDate;
    const DurationInHrs = req.params.DurationInHrs;
    const DateOfFlight = req.params.DateOfFlight;
    const NumberOfEconomySeats = Number(req.params.NumberOfEconomySeats);
    const NumberOfBusinessSeats = Number(req.params.NumberOfBusinessSeats);
    const NumberOfFirstClassSeats = Number(req.params.NumberOfFirstClassSeats);
    const Airport = req.params.Airport;
    const DepartureTerminals = req.params.DepartureTerminals;
    const ArrivalTerminals = req.params.ArrivalTerminals;
    const From = req.params.From;
    const To = req.params.To;
    const TotalTicketPrice = Number(req.params.TotalTicketPrice);
    const BaggageAllowance = req.params.BaggageAllowance;
    const TypeOfFlight = req.params.TypeOfFlight;
    const Cabin = req.params.Cabin;
    console.log(req.params);
    const flight = await WishList.create({
      FlightNumber,
=======
    const FlightNumber = Number(req.body.FlightNumber);
    const UserEmail = req.body.UserEmail;
    const DepartureTime = req.body.DepartureTime;
    const ArrivalTime = req.body.ArrivalTime;
    const DepartureDate = req.body.DepartureDate;
    const ArrivalDate = req.body.ArrivalDate;
    const DurationInHrs = req.body.DurationInHrs;
    const DateOfFlight = req.body.DateOfFlight;
    const Airport = req.body.Airport;
    const DepartureTerminals = req.body.DepartureTerminals;
    const ArrivalTerminals = req.body.ArrivalTerminals;
    const From = req.body.From;
    const To = req.body.To;
    const TotalTicketPrice = Number(req.body.TotalTicketPrice);
    const BaggageAllowance = req.body.BaggageAllowance;
    const TypeOfFlight = req.body.TypeOfFlight;
    const myFlight = await FLights.findOne({ FlightNumber });
    console.log(myFlight);
    const AvailiableSeatsInEconomy = myFlight.AvailiableSeatsInEconomy;
    const AvailableSeatsInBusiness = myFlight.AvailableSeatsInBusiness;
    const AvailableSeatsInFirstClass = myFlight.AvailableSeatsInFirstClass;

    console.log("USEREMAIL =======>", UserEmail);
    const flight = await WishList.create({
      FlightNumber,
      UserEmail,
>>>>>>> final2
      DepartureTime,
      ArrivalTime,
      DepartureDate,
      ArrivalDate,
      DurationInHrs,
      DateOfFlight,
<<<<<<< HEAD
      NumberOfEconomySeats,
      NumberOfBusinessSeats,
      NumberOfFirstClassSeats,
=======
      AvailiableSeatsInEconomy,
      AvailableSeatsInBusiness,
      AvailableSeatsInFirstClass,
>>>>>>> final2
      Airport,
      DepartureTerminals,
      ArrivalTerminals,
      From,
      To,
      TotalTicketPrice,
      BaggageAllowance,
      TypeOfFlight,
<<<<<<< HEAD
      Cabin,
=======
>>>>>>> final2
    });
    res.status(200).json({
      status: "success",
      data: {
<<<<<<< HEAD
        WishList: flight,
=======
        4: flight,
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

exports.getWishList = async (req, res) => {
  try {
<<<<<<< HEAD
=======
    const UserEmail = req.params.UserEmail;
    const flights = await WishList.find({
      UserEmail,
    });
    // console.log(flights);
    res.status(200).json({
      status: "success",
      results: flights.length,
      data: {
        WishList: flights,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
>>>>>>> final2
    const flights = await WishList.find();
    // console.log(flights);
    res.status(200).json({
      status: "success",
      results: flights.length,
      data: {
        WishList: flights,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
<<<<<<< HEAD
};
=======
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const flights = await WishList.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      results: flights.length,
      data: {
        WishList: flights,
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
