const mongoose = require("mongoose");
const storeSchema = mongoose.Schema(
  {
    storename: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("stores", storeSchema);
