const express = require("express");
const {
  getUser,
  postUser,
  deleteUser,
  updateUser,
} = require("../controllers/verbController");
const auth = require("../middlewares/auth");

const verbRouter = express.Router();

verbRouter.get("/", auth, getUser);

verbRouter.post("/", auth, postUser);
verbRouter.delete("/:id", auth, deleteUser);
verbRouter.put("/:id", auth, updateUser);
module.exports = verbRouter;
