const mongoose =
require("mongoose");

const restaurantSchema =
new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  cuisine: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: ""
  },

  image: {
    type: String,
    default: ""
  },

  averageRating: {
    type: Number,
    default: 0
  },

  totalReviews: {
    type: Number,
    default: 0
  },

  owner: {
    type:
    mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  isApproved: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
}
);

module.exports =
mongoose.model(
  "Restaurant",
  restaurantSchema
);