import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import restaurants from "./pages/restaurant";
import RestaurantDetails from "./pages/RestaurantDetails";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import AddRestaurant from "./admin/AddRestaurant";
import ManageRestaurant from "./admin/ManageRestaurant";
import ManageUsers from "./admin/ManageUsers";
import AdminLogin from "./admin/adminlogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/restaurant"
          element={<RestaurantDetails />}
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />

        <Route path="/adminlogin" element={<AdminLogin />}/>

        <Route
          path="/admin/add-restaurant"
          element={<AddRestaurant />}
        />

        <Route
          path="/admin/manage-restaurants"
          element={<ManageRestaurant />}
        />

        <Route
          path="/admin/manage-users"
          element={<ManageUsers />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;