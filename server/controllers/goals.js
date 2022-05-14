const getGoals = (req, res) => {
  res.status(200).json({ message: "GET goals" });
};

const createGoal = (req, res) => {
  res.status(200).json({ message: "SET goals" });
};

const updateGoal = (req, res) => {
  let id = req.params.id;
  res.status(200).json({ message: `UPDATE goal ${id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: "DELETE goals" });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
