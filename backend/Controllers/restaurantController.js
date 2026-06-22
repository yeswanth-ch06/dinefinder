const Restaurant =
require("../models/Restaurant");


// Create Restaurant

const createRestaurant =
async (req, res) => {

  try {

    const restaurant =
    await Restaurant.create({

      ...req.body,

      owner:
      req.user._id

    });

    res.status(201).json(
      restaurant
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Get Restaurants

const getRestaurants =
async (req, res) => {

  try {

    const restaurants =
    await Restaurant.find({
      isApproved: true
    }).populate(
      "owner",
      "name email"
    );

    res.json(restaurants);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Get Single Restaurant

const getRestaurantById =
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

    res.json(
      restaurant
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Update Restaurant

const updateRestaurant =
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

    if (
      restaurant.owner.toString()
      !==
      req.user._id.toString()
      &&
      req.user.role
      !==
      "admin"
    ) {

      return res.status(403).json({
        message:
        "Not Authorized"
      });

    }

    Object.assign(
      restaurant,
      req.body
    );

    const updated =
    await restaurant.save();

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


// Delete Restaurant

const deleteRestaurant =
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

    await restaurant.deleteOne();

    res.json({
      message:
      "Restaurant Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
};