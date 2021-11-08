const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB conn success");
  });

const port = process.env.PORT || 8000;
// app.post("/api/v1/delete-flight", (req, res) => {
//   const flightNumber = req.body.flightNumber;
//   const airport = req.body.airport;
//   console.log(airport);
//   console.log(flightNumber);
// });
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
