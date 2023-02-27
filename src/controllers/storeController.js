const storeModel = require("../models/store");

const postStore = async (req, resp) => {
  const { storename, passward, email, phone } = req.body;
  const newstore = new storeModel({
    storename: storename,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await newStore.save;
    resp.status(201).json(newStore);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

const updateStore = async (req, resp) => {
  const { storename, passward, email, phone } = req.body;
  const newStore = new storeModel({
    storename: storename,
    passward: passward,
    email: email,
    phone: phone,
  });
  try {
    await storeModel.findByIdAndUpdate(id, newStore, { new: true });
    resp.status(200).json(newStore);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const deleteStore = async (req, resp) => {
  const id = req.params.id;

  try {
    const store = await stroreModel.findByIdAndRemove();
    resp.status(202).json();
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const getStore = async (req, resp) => {
  try {
    const stores = await storeModel.find({ storeId: req.storeId });

    resp.status(200).json(stores);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};

module.exports = {
  postStore,
  updateStore,
  deleteStore,
  getStore,
};
