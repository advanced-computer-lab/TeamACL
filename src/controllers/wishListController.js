const WishList = require("./../models/WishList");
const FLights = require("./../models/Flight");
const Flight = require("./flightController");

exports.addToWishList = async (req, res) => {
  try {
    const FlightNumber = Number(req.params.FlightNumber);
    const DepartureTime = req.params.DepartureTime;
    const ArrivalTime = req.params.ArrivalTime;
    const DepartureDate = req.params.DepartureDate;
    const ArrivalDate = req.params.ArrivalDate;
    const DurationInHrs = req.params.DurationInHrs;
    const DateOfFlight = req.params.DateOfFlight;
    const Airport = req.params.Airport;
    const DepartureTerminals = req.params.DepartureTerminals;
    const ArrivalTerminals = req.params.ArrivalTerminals;
    const From = req.params.From;
    const To = req.params.To;
    const TotalTicketPrice = Number(req.params.TotalTicketPrice);
    const BaggageAllowance = req.params.BaggageAllowance;
    const TypeOfFlight = req.params.TypeOfFlight;
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
