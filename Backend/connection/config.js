require("dotenv").config();
require("colors");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection is successfull".bgWhite.red);
  })
  .catch((err) => {
    console.log(err);
  });
