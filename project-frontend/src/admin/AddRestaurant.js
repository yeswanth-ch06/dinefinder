import { useState } from "react";

function AddRestaurant() {

  const [restaurant,setRestaurant] =
  useState({
    name:"",
    location:"",
    rating:"",
    image:""
  });

  const handleChange = (e)=>{
    setRestaurant({
      ...restaurant,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(restaurant);
  };

  return (

    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3>Add Restaurant</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Restaurant Name"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="number"
              name="rating"
              placeholder="Rating"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <button
              className="btn btn-success"
            >
              Add Restaurant
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddRestaurant;