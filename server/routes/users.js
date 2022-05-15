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
const { validateUser } = require("../middlware/auth.js");

// services from controller
router.post("/", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/:id", validateUser, getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
