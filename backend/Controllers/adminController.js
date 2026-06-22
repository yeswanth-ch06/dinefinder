const User =
require("../models/User");

const Restaurant =
require("../models/Restaurant");

const Review =
require("../models/Review");


// Dashboard

const dashboard =
async (req, res) => {

  try {

    const totalUsers =
    await User.countDocuments();

    const totalRestaurants =
    await Restaurant.countDocuments();

    const totalReviews =
    await Review.countDocuments();

    res.json({

      totalUsers,

      totalRestaurants,

      totalReviews

    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Get Users

const getUsers =
async (req, res) => {

  try {

    const users =
    await User.find()
    .select("-password");

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Delete User

const deleteUser =
async (req, res) => {

  try {

    await User.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
      "User Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Approve Restaurant

const approveRestaurant =
async (req, res) => {

  try {

    const restaurant =
    await Restaurant.findById(
      req.params.id
    );

    if (!restaurant) {

      return res.status(404).json({
        message:
        "Restaurant Not Found"
      });

    }

    restaurant.isApproved =
    true;

    await restaurant.save();

    res.json({
      message:
      "Restaurant Approved"
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};

module.exports = {

  dashboard,

  getUsers,

  deleteUser,

  approveRestaurant

};