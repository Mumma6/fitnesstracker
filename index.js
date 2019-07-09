const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

// Server varibles
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB...");
});

// Adding routes
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// Setting correct URL for routes
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
