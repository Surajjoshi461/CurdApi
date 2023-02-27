const express = require("express");
const {
  getPet,
  postPet,
  deletePet,
  updatePet,
} = require("../controllers/petController");
const auth = require("../middlewares/auth");

const petRouter = express.Router();

petRouter.get("/", auth, getPet);

petRouter.post("/", auth, postPet);
petRouter.delete("/:id", auth, deletePet);
petRouter.put("/:id", auth, updatePet);
module.exports = petRouter;
