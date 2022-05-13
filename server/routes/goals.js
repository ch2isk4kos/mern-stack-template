const express = require("express");
const router = express.Router();

// read
router.get("/", (req, res) => {
  res.status(200).json({ message: "GET goals" });
});

// create
router.post("/", (req, res) => {
  res.status(200).json({ message: "SET goal" });
});

// update
router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).json({ message: `UPDATE goal ${id}` });
});

// delete
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).json({ message: `DELETE goal ${id}` });
});

module.exports = router;
