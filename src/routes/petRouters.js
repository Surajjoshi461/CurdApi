const express = require("express");
const {
  getPet,
  postPet,
  deletePet,
  updatePet,
} = require("../controllers/petController");
const auth = require("../middlewares/auth");

const petRouter = express.Router();

petRouter.get("/", auth, getUser);

petRouter.post("/", auth, postUser);
petRouter.delete("/:id", auth, deleteUser);
petRouter.put("/:id", auth, updateUser);
module.exports = petRouter;
