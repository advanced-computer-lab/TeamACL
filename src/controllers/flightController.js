const Flight = require("./../models/Flight");

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find(req.query);
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

// exports.searchFlight = async (req, res) => {
//   try {
//     const flight = await Flight.find(req.body);
//     res.status(200).json({
//       status: "success",
//       data: {
//         flight,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       massege: err,
//     });
//   }
// };

exports.createFLight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.status(201).json({
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
  try {
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
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    res.status(204).json({
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
