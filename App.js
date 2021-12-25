const express = require("express");
const morgan = require("morgan");
const flightRouts = require("./src/routes/flightRouts");
const userRouter = require("./src/routes/usersRouts");
<<<<<<< HEAD
const reserveRouter = require("./src/routes/reservationsRouts");  //
const WishListRouter = require("./src/routes/WishListRouts");  //
const cors = require("cors");
const User = require("./src/models/User");   //
const Flight = require("./src/models/Flight");  //
=======
const reserveRouter = require("./src/routes/reservationsRouts");
const WishListRouter = require("./src/routes/WishListRouts");
const cors = require("cors");
const User = require("./src/models/User");
const Flight = require("./src/models/Flight");
>>>>>>> final2

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
<<<<<<< HEAD
app.use("/api/v1/reserve", reserveRouter); //
app.use("/api/v1/WishList", WishListRouter); //
=======
app.use("/api/v1/reserve", reserveRouter);
app.use("/api/v1/WishList", WishListRouter);

>>>>>>> final2
module.exports = app;
