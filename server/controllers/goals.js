const asyncHandler = require("express-async-handler");
const Goal = require("../models/Goal");

const getGoals = asyncHandler(async (req, res) => {
  let goals = await Goal.find();
  res.status(200).json(goals);
});

const createGoal = asyncHandler(async (req, res) => {
  let message = req.body.message;
  if (!message) {
    res.status(400);
    throw new Error("Please add a message");
  }
  console.log(message);

  let goal = await Goal.create({ message: message });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  let id = req.params.id;
  await Goal.findByIdAndDelete(id);
  res.status(200).json({ id: id });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
