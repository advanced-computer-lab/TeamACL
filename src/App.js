//App variables   Barakat22

const express = require("express");
const mongoose = require("mongoose");
const userController = require("./Routes/userController");
var cors = require('cors');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!

//App variables
const app = express();
const port = process.env.PORT || "8000";
const User = require("./Models/User");
const Flight = require("./Models/Flight");

//"mongodb+srv://dbGamal_123:Barakat22@aclflights.higdx.mongodb.net/ACLflights?retryWrites=true&w=majority";

//"mongodb+srv://dbGamal_123:Barakat22@aclflights.higdx.mongodb.net/ACL?retryWrites=true&w=majority";

const MongoURI =
"mongodb+srv://dbGamal_123:Barakat22@aclflights.higdx.mongodb.net/ACL?retryWrites=true&w=majorit";  
//"mongodb+srv://alaa:1234@cluster0.6ulyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// #Importing the userController
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads// configurations
// Mongo DB
mongoose
  .connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("MongoDB is now connected"))
  .catch((err) => console.log(err));

// #Routing to usercontroller here

//app.post('/add-user', userController.addUser)
app.post("/add-Flight", userController.addFlight);
app.get("/view-flights", userController.viewFlights);

app.get(
  "/search-specific-flights/:flightNumber,departureTime,arrivalTime,dateOfFlight,airportTerminals",
  userController.getFlight
);

app.put("/update-flight/:id", userController.updateFlight);
app.delete("/delete-flight/:id", userController.deleteFlight);

app.get("/addAdmin", (req, res) => {
  const user = new User({
    FirstName: "Adminstrator",
    LastName: "Kris",
    Email: "Jimmy.Kris@yahoo.com,",
    DateOfBirth: "12/01/1998",
    LivesIn: "cairo",
    Password: "12345678",
    PhoneNumber: "01023456778",
    Gender: "male",
  });

  user.save().then((result) => {
    res.send("inserted");
  });
});

// Starting server
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
