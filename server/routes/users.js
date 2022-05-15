const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.js");

// services from controller
router.post("/", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
