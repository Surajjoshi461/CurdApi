const mongoose = require("mongoose");
const petSchema = mongoose.Schema(
  {
    petname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("pets", petSchema);
