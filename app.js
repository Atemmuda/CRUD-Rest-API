//Modules used for this file
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./db/connection");
const router = require("./routes/routers");

//Localhost port number
const port = 5000;

//Using middlewares for more functionalities
app.use(express.json());

//console.log(router);

// Main route
app.use("/api/v1/tasks", router);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Starts the server for the backend
const start = async () => {
  try {
    await connectDb(process.env.DATABASE_CONNECTION);
    //Express apllication should listen to a port and call a function
    app.listen(port, (req, res) => {
      console.log(`listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
