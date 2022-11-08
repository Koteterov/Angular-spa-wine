const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const cors = require("cors");
// const corsHeaders = require("./src/middlewares/corsHeaders");

const auth = require("./src/middlewares/auth");
const wineController = require("./src/controllers/wine");
const usersController = require("./src/controllers/users");

async function start() {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/angularWine");

    console.log("DB Ready");
  } catch (err) {
    console.log("Error connecting to database");
    return process.exit(1);
  }

  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:4200",
      credentials: true,
    })
  );
  // app.use(corsHeaders());
  app.use(auth());

  app.use("/data/catalog", wineController);
  app.use("/users", usersController);

  app.listen(3030, () => console.log("REST Service started on port 3030"));
}

start();
