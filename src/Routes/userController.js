// #Task route solution
const User = require('../models/User');
const Flight = require('../models/Flight');
//Add-user

/*exports.addUser = (req, res) => {
    
    const user = new User(req.body)
  
    user.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };
  */
  //Add-flight
  exports.addFlight = (req, res) => {
    
    const flight = new Flight(req.body)
  
    flight.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };

// getting all the flights

exports.viewFlights = (req, res) => {                                               ``
       Flight.find({})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
    };

    exports.getFlight = (req, res) => {
      Flight.find({FlightNumber:req.params.flightNumber,DepartureTime:req.params.departureTime,ArrivalTime:req.params.arrivalTime,
        DateOfFlight:req.params.dateOfFlight,AirportTerminals:req.params.airportTerminals})
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };
   
  //flightNumber,departureTime,arrivalTime,dateOfFlight,dateOfFlight,airportTerminals
    exports.updateFlight = (req,res)=>{
        Flight.findByIdAndUpdate(req.params.id,req.body).then(result =>{
    
            res.status(200).send("Flight updated ");
            console.log('The Flight is Updated successfully !');
        }).catch(err => {
            console.log(err);
          });
        };
  
    //Deleting an existing user
    exports.deleteUFlight = (req,res)=>{
        User.findByIdAndRemove(req.params.id).then(result =>{
    
            res.status(200).send ("Flight Deleted ");
            console.log("The Flight is deleted successfully !");
        }).catch(err => {
            console.log(err);
          });
    
      };
    
    
    
    
    