const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a text value"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add a valid email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a valid password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
