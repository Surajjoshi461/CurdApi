const petModel = require("../models/pet");

const postPet = async (req, resp) => {
  const { petname, passward, email, phone } = req.body;
  const newPet = new petModel({
    petname: petname,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await newPet.save;
    resp.status(201).json(newPet);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

const updatePet = async (req, resp) => {
  const { petname, passward, email, phone } = req.body;
  const newPet = new petModel({
    petname: petname,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await petModel.findByIdAndUpdate(id, newPet, { new: true });
    resp.status(200).json(newPet);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const deletePet = async (req, resp) => {
  const id = req.params.id;

  try {
    const pet = await petModel.findByIdAndRemove();
    resp.status(202).json();
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const getPet = async (req, resp) => {
  try {
    const pets = await petModel.find({ petId: req.petId });

    resp.status(200).json(pets);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

module.exports = {
  postPet,
  updatePet,
  deletePet,
  getPet,
};
