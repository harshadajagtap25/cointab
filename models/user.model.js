const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  wrongCount: {
    type: "number",
    default: 0,
  },
  lastWrong: {
    type: "string",
    default: "",
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
