const express = require("express");
const morgan = require("morgan");
const flightRouts = require("./src/routes/flightRouts");
const cors = require('cors');

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/flights", flightRouts);
module.exports = app;
