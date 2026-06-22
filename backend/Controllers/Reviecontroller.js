const Review =
require("../models/Review");

const addReview =
async (req, res) => {

  try {

    const review =
    await Review.create({

      user:
      req.user._id,

      restaurant:
      req.body.restaurant,

      rating:
      req.body.rating,

      comment:
      req.body.comment

    });

    res.status(201).json(
      review
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


const getReviews =
async (req, res) => {

  try {

    const reviews =
    await Review.find({
      restaurant:
      req.params.restaurantId
    }).populate(
      "user",
      "name"
    );

    res.json(reviews);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


module.exports = {
  addReview,
  getReviews
};