const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlware/error.js");
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json()); // passing data from client with json
app.use(express.urlencoded({ extended: false })); // passing data from client via request body

// routes
app.use("/api/v1/goals", require("./routes/goals"));

// error handling
app.use(errorHandler); // overriding express default error handler with custom middleware

// server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
