const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goals.js");
const { validateUser } = require("../middlware/auth.js");

// services from controller
router.get("/", validateUser, getGoals);
router.post("/", validateUser, createGoal);
router.put("/:id", validateUser, updateGoal);
router.delete("/:id", validateUser, deleteGoal);

module.exports = router;
