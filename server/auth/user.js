const jwt = require("jsonwebtoken"); // web sessions

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
};

module.exports = { generateToken };
