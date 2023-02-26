const verbModel = require("../models/verb");

const postUser = async (req, resp) => {
  const { username, passward, email, phone } = req.body;
  const newUser = new verbModel({
    username: username,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await newUser.save;
    resp.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

const updateUser = async (req, resp) => {
  const { username, passward, email, phone } = req.body;
  const newUser = new verbModel({
    username: username,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await verbModel.findByIdAndUpdate(id, newUser, { new: true });
    resp.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const deleteUser = async (req, resp) => {
  const id = req.params.id;

  try {
    const user = await verbModel.findByIdAndRemove();
    resp.status(202).json();
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const getUser = async (req, resp) => {
  try {
    const users = await verbModel.find({ userId: req.userId });

    resp.status(200).json(users);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

module.exports = {
  postUser,
  updateUser,
  deleteUser,
  getUser,
};
