function RestaurantCard({ restaurant }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.name}
          style={{ height: "250px" }}
        />

        <div className="card-body">

          <h5 className="card-title">
            {restaurant.name}
          </h5>

          <p className="card-text">
            📍 {restaurant.location}
          </p>

          <p>
            ⭐ {restaurant.rating}
          </p>

          <button className="btn btn-danger">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default RestaurantCard;