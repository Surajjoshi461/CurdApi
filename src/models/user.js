const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    passward: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
