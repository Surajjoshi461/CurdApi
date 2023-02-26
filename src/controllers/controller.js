const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "api_key";
const bcrypt = require("bcrypt");
const { Router } = require("express");

const signup = async (req, resp) => {
  const { username, email, passward } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return resp.status(400).json({ message: "user already exists" });
    }

    const hashedPassward = await bcrypt.hash(passward, 10);
    const result = await userModel.create({
      email: email,
      passward: hashedPassward,
      username: username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    resp.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
const signin = async (req, resp) => {
  const { email, passward } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (!existingUser) {
      return resp.status(400).json({ message: "user Not Found" });
    }

    const matchPassward = await bcrypt.compare(passward, existingUser.passward);

    if (!matchPassward) {
      return resp.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );

    resp.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "something went wrong..." });
  }
};
// const userLogout = async (req, resp) => {
//   try {
//     req.session.destroy();
//     resp.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };
module.exports = { signup, signin };
