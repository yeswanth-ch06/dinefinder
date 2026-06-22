const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const adminAuth =
require(
 "../middleware/adminAuth"
);

const {
 dashboard,
 getUsers,
 deleteUser,
 approveRestaurant
}
=
require(
 "../controllers/adminController"
);

router.get(
 "/dashboard",
 auth,
 adminAuth,
 dashboard
);

router.get(
 "/users",
 auth,
 adminAuth,
 getUsers
);

router.delete(
 "/users/:id",
 auth,
 adminAuth,
 deleteUser
);

router.put(
 "/approve/:id",
 auth,
 adminAuth,
 approveRestaurant
);

module.exports =
router;