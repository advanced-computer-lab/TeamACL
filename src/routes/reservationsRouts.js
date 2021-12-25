const express = require("express");
const reserveController = require("./../controllers/ReservationsController");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router
  .route("/:id/:UserEmail/:FlightId/:FlightNumber/:ChosenCabin/:SeatNumber")
  .patch(reserveController.updateReservation);


app.post("/payment", (req, res)=>{
  const{product, token} = req.body;
  console.log("PRODUCT",product);
  console.log("PRICE",price);
  const idempontencyKey = uuid()
  return stripe.costumers.create({
    email: token.email,
    source: token.id
  }).then (customer =>{
    stripe.charges.create({
      ammount:product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      decsription: 'purchase of product.name',
    },[idempontencyKey])
  }).then(result =>res.status(200).json(result))
  .catch(err => console.log(err)  )


})


router
  .route("/flightDetails/FlightNumber")
  .get(flightController.getSelectedFlight); //gets the flight details using the getSelected flight method in the flight controller!!!

router.route("/:UserEmail").get(reserveController.getReservation);
router.route("/").get(reserveController.getAllReservations);

// UserEmail/:UserId/:FlightId
router
  .route("/:UserEmail/:FlightNumber")
  .post(reserveController.createReservation);

router.route("/:id").delete(reserveController.canceleReservation);

module.exports = router;
