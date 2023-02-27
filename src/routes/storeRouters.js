const express = require("express");
const {
  getStore,
  postStore,
  deleteStore,
  updateStore,
} = require("../controllers/storeController");
const auth = require("../middlewares/auth");

const storeRouter = express.Router();

storeRouter.get("/", auth, getStore);

storeRouter.post("/", auth, postStore);
storeRouter.delete("/:id", auth, deleteStore);
storeRouter.put("/:id", auth, updateStore);
module.exports = storeRouter;
