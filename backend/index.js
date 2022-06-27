const express = require("express");
const connectDb = require("./config/connectDb");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
connectDb();
app.use(express.json());
app.use("/api/user", userRoutes);
app.listen(process.env.port, () =>
  console.log(`your server is running on port ${process.env.port}`)
);
