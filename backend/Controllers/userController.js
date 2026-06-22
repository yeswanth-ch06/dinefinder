const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken =
require("../utils/generateToken");

// Register User

const registerUser = async (
  req,
  res
) => {
  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    const userExists =
    await User.findOne({
      email
    });

    if (userExists) {
      return res.status(400).json({
        message:
        "User Already Exists"
      });
    }

    const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

    const user =
    await User.create({
      name,
      email,
      password:
      hashedPassword,
      role:
      role || "customer"
    });

    res.status(201).json({
      token:
      generateToken(
        user._id,
        user.role
      )
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};


// Login User

const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
    await User.findOne({
      email
    });

    if (
      user &&
      await bcrypt.compare(
        password,
        user.password
      )
    ) {

      res.json({
        token:
        generateToken(
          user._id,
          user.role
        )
      });

    } else {

      res.status(401).json({
        message:
        "Invalid Credentials"
      });

    }

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};


// Get Profile

const getProfile = async (
  req,
  res
) => {

  try {

    const user =
    await User.findById(
      req.user._id
    ).select(
      "-password"
    );

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};