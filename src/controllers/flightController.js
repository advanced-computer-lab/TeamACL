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

exports.getFlight =  async (req, res) => {
 // console.log(req)
  console.log("request",req.body)

  try {
   
    const flight =  await Flight.find(req.body);
    // if(flight=={}){
    //   console.log("no such flight")
    // }
    console.log(flight)
    res.send( flight);
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
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
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
  console.log("hamada");
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id, req.body);
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

exports.getDepartureFlights = async (req, res) => {
  try {
    const flight = await Flight.find({
      TypeOfFlight: "Departure",
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
exports.getReturnFlights =  async (req, res) => {
  // console.log(req)
   console.log("request",req.body)
 
   try {
    
     const flight =  await Flight.find(req.body);
     TypeOfFlight: "Return",
     console.log(flight)
     res.send( flight);
   } catch (err) {
     res.status(404).json({
       status: "fail",
       massege: err,
     });
   }
 };

// exports.getReturnFlights = async (req, res) => {
//   try {
//     const flight = await Flight.find({
//       TypeOfFlight: "Return",
//     });
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

exports.getSelectedFlight = async (req, res) => {
  //for displaying the selected flight whether its a departure or its a return one.
  try {
    const flight = await Flight.findById(req.params.id); // el (req.params.id) el mafrood btgeeb el flight by id --> asbha req.params.id zi ma hya wala m7tag a8yraha
    console.log(req.params);
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