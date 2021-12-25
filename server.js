const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./App");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false,})
  .then((con) => {
    console.log("DATABASE connected succesfully!!");
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
