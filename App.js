const express = require("express");
const morgan = require("morgan");
const flightRouts = require("./src/routes/flightRouts");
const userRouter = require("./src/routes/usersRouts");
const cors = require("cors");
const User = require("./src/models/User");
const Flight = require("./src/models/Flight");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/flights", flightRouts);
app.use("/api/v1/users", userRouter);
app.post("", async (req, res) => {
  // const flightID = req.body.id;
  // const userEmail = req.body.Email;
  // const flight = await Flight.find(flightID);
  // const user = await User.find(userEmail);
});
module.exports = app;
