const bcrypt = require("bcryptjs"); // encryption
const jwt = require("jsonwebtoken"); // web sessions
const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const { generateToken } = require("../auth/jwt.js");

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields.");
  }

  // check if user exists
  const doesExist = await User.findOne({ email });
  if (doesExist) {
    res.status(400);
    throw new Error("Email is already in use.");
  }

  // hash user password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    username: username,
    email: email,
    password: hashPassword,
  });

  // response
  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Error creating user");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // compare user with hashed password and respond
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Logout User" });
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const updateUser = asyncHandler(async (req, res) => {
  res.json({ message: "Update User" });
});

const deleteUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Delete User" });
});

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
};
