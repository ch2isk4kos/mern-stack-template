const asyncHandler = require("express-async-handler");
const Goal = require("../models/Goal");
const User = require("../models/User");

const getGoals = asyncHandler(async (req, res) => {
  let goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

const createGoal = asyncHandler(async (req, res) => {
  let message = req.body.message;
  let user = req.user.id;
  if (!message) {
    res.status(400);
    throw new Error("Please add a message");
  }
  console.log(message);

  let goal = await Goal.create({ message: message, user: user });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const user = await User.findById(req.user.id);

  // check for user of goal
  if (!user) {
    res.status(401);
    throw new Error("User not found.");
  }

  // check logged in user matches user creating the goal
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized.");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  let goal = await Goal.findById(req.params.id);

  // check for user of goal
  if (!goal) {
    res.status(401);
    throw new Error("Goal not found.");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found.");
  }

  // check logged in user matches user creating the goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized.");
  }

  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
