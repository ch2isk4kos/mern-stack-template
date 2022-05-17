const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlware/error");
const { connectToMongoAtlas } = require("./config");
const PORT = process.env.PORT || 5000;

const app = express();

// database
connectToMongoAtlas();

// middleware
app.use(express.json()); // passing data from client with json
app.use(express.urlencoded({ extended: false })); // passing data from client via request body

// routes
app.use("/api/v1/goals", require("./routes/goals"));
app.use("/api/v1/users", require("./routes/users"));

// error handling
app.use(errorHandler); // overriding express default error handler with custom middleware

// server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
