const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB =
require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/users",
  require("./routes/userRoutes")
);

app.use(
  "/api/restaurants",
  require("./routes/restaurantRoutes")
);

app.use(
  "/api/bookings",
  require("./routes/bookingRoutes")
);

app.use(
  "/api/reviews",
  require("./routes/reviewRoutes")
);

app.use(
  "/api/menu",
  require("./routes/menuRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server Running On Port ${process.env.PORT}`
    );
  }
);