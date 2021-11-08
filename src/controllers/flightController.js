const Flight = require("./../models/Flight");

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json({
      status: "success",
      results: flights.length,
      data: {
        flights,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

exports.getFlight = async (req, res) => {
  try {
    const flight = await Flight.find(req.body);
    res.status(200).json({
      status: "success",
      data: {
        flight,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

exports.createFLight = async (req, res) => {
  console.log(req.body);
  try {
    const newFlight = await Flight.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        Flight: newFlight,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
  }
};

exports.updateFlight = async (req, res) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  try {
    console.log(req.body);
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        flight,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};

exports.deleteFlight = async (req, res) => {
  console.log("hamada")
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id,req.body);
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
