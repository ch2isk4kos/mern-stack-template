const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Register User" });
});

const loginUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Login User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Logout User" });
});

const getUser = asyncHandler(async (req, res) => {
  //
  res.json({ message: "Get User Data" });
});

const updateUser = asyncHandler(async (req, res) => {
  //
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
