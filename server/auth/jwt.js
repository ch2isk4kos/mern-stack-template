const jwt = require("jsonwebtoken"); // web sessions
// const asyncHandler = require("express-async-handler");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
};

module.exports = { generateToken };
