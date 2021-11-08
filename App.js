const express = require("express");
const morgan = require("morgan");
const flightRouts = require("./src/routes/flightRouts");
const userRouter = require("./src/routes/usersRouts");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/flights", flightRouts);
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/users", userRouter);
module.exports = app;
