require("dotenv").config();
require("colors");
const express = require("express");
require("./connection/config");
const importData = require("./seeder");
const router = require("./routes/router");
const addblog = require("./routes/router");

importData();
const app = express();
app.use(router);

const port = process.env.PORT || 4000;
app.use(express.json());

app.use("/api", addblog);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`server is running on port ${port}`.bgYellow.black)
);
