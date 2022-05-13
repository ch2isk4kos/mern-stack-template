const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/v1/goals", require("./routes/goals"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
