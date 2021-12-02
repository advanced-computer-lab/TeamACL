const express = require("express");
const morgan = require("morgan");
const flightRouts = require("./src/routes/flightRouts");
const userRouter = require("./src/routes/usersRouts");
const cors = require("cors");

const app = express();
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
const bp= require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded())
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/flights", flightRouts);
app.use("/api/v1/users", userRouter);
module.exports = app;
