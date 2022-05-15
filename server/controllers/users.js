const createUser = (req, res) => {
  //
  res.json({ message: "Register User" });
};

const loginUser = (req, res) => {
  //
  res.json({ message: "Login User" });
};

const logoutUser = (req, res) => {
  //
  res.json({ message: "Logout User" });
};

const getUser = (req, res) => {
  //
  res.json({ message: "Get User Data" });
};

const updateUser = (req, res) => {
  //
  res.json({ message: "Update User" });
};

const deleteUser = (req, res) => {
  //
  res.json({ message: "Delete User" });
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
};
