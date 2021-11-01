// External variables

const { application } = require("express");
const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//const MongoURI = 'mongodb+srv://atlasDB:mongodb1234@cluster0.vt5cm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;


//App variables
const app = express();
const port = process.env.PORT || "4000";// External variables
const express = require("express");
const mongoose = require('mongoose');
const userController = require('./Routes/userController');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
const MongoURI =  'mongodb+srv://nadahesham:test1234@cluster0.5uvnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;


//App variables
const app = express();
const port = process.env.PORT || "8000";
const User = require('./models/User');
// #Importing the userController

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));


app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });

// #Routing to usercontroller here
app.post()

app.post('/add-user', userController.addUser)
app.post('/add-Flight', userController.addFlight)
app.get('/view-flights',userController.viewFlights)

app.get('/search-specific-flights/:flightNumber,departureTime,arrivalTime,dateOfFlight,dateOfFlight,airportTerminals', userController.getFlight)
app.get('/get-all-flights/:name', userController.getUser)
app.put('/update-user/:id',userController.updateUser)
app.delete('/delete-user/:id',userController.deleteUser)                                    


app.get('/view-users',userController.viewUsers)
app.get('/get-all-users/:name', userController.getUser)
app.put('/update-user/:id',userController.updateUser)
app.delete('/delete-user/:id',userController.deleteUser)                                    



// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

const User = require('./models/User');
// #Importing the userController


app.get('/addAdmin',(req,res) => {
  const admin = new User({
    FirstName:"Jimmy",LastName:"Kris",Email:"Jimmy.Kris@yahoo.com,",DateOfBirth:"12/01/1998"
})


admin.save().then(result=>{
  res.send("inserted")
})
});

// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));

/*
                                                    Start of your code
*/
app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });

// #Routing to usercontroller here




/*
                                                    End of your code
*/

// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  