const jwt = require("jsonwebtoken"); // web sessions
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const validateUser = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from bearer
      token = req.headers.authorization.split(" ")[1]; // grab the token
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
      // get user from token payload and assign to req.user - which allows you to access user in all protected routes
      req.user = await User.findById(decoded.id).select("-password");
      next(); // moves onto the next piece of middleware
    } catch (error) {
      console.log(error.message);
      res.status(401);
      throw new Error("Error validating user.");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Not authorized. No token.");
  }
});

module.exports = { validateUser };
