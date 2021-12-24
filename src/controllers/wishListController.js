const WishList = require("./../models/WishList");
const FLights = require("./../models/Flight");
const Flight = require("./flightController");

exports.addToWishList = async (req, res) => {
  try {
    const FlightNumber = Number(req.body.FlightNumber);
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

    console.log(TypeOfFlight);
    const flight = await WishList.create({
      FlightNumber,
      DepartureTime,
      ArrivalTime,
      DepartureDate,
      ArrivalDate,
      DurationInHrs,
      DateOfFlight,
      AvailiableSeatsInEconomy,
      AvailableSeatsInBusiness,
      AvailableSeatsInFirstClass,
      Airport,
      DepartureTerminals,
      ArrivalTerminals,
      From,
      To,
      TotalTicketPrice,
      BaggageAllowance,
      TypeOfFlight,
    });
    res.status(200).json({
      status: "success",
      data: {
        4: flight,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
    console.log(err);
  }
};

exports.getWishList = async (req, res) => {
  try {
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
};
