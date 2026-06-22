const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {
 createRestaurant,
 getRestaurants,
 getRestaurantById,
 updateRestaurant,
 deleteRestaurant
}
=
require(
 "../controllers/restaurantController"
);

router.get(
 "/",
 getRestaurants
);

router.get(
 "/:id",
 getRestaurantById
);

router.post(
 "/",
 auth,
 createRestaurant
);

router.put(
 "/:id",
 auth,
 updateRestaurant
);

router.delete(
 "/:id",
 auth,
 deleteRestaurant
);

module.exports =
router;