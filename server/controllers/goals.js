const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET goals" });
});

const createGoal = asyncHandler(async (req, res) => {
  let message = req.body.message;
  if (!message) {
    res.status(400);
    throw new Error("Please add a message");
  }
  console.log(message);
  res.status(200).json({ message: "SET goals" });
});

const updateGoal = asyncHandler(async (req, res) => {
  let id = req.params.id;
  res.status(200).json({ message: `UPDATE goal ${id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "DELETE goals" });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
