import restaurant from "./restaurant";
import Headeer from "../components/header";

function RestaurantDetails() {
  return (
    <div className="container mt-4">
      <Headeer/>
      <div className="row">
        {restaurant.map((restaurant) => (
          <div className="col-md-4 mb-4" key={restaurant.id}>
            <div className="card shadow">
              <img
                src={restaurant.image}
                className="card-img-top"
                alt={restaurant.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{restaurant.name}</h5>

                <p>
                  ⭐ {restaurant.rating}
                </p>

                <p>
                  📍 {restaurant.location}
                </p>

                <p>
                  💰 {restaurant.price}
                </p>

                <p>
                  🍽️ {restaurant.cuisine}
                </p>

                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#restaurant${restaurant.id}`}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade"
              id={`restaurant${restaurant.id}`}
              tabIndex="-1"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">

                  <div className="modal-header">
                    <h5>{restaurant.name}</h5>

                    <button
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>

                    <p><strong>Price:</strong> {restaurant.price}</p>

                    <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>

                    <p><strong>Location:</strong> {restaurant.location}</p>

                    <p><strong>Contact:</strong> {restaurant.contact}</p>

                    <p><strong>Timings:</strong> {restaurant.timings}</p>

                    <div className="ratio ratio-16x9">
                      <iframe
                        src={restaurant.map}
                        title={restaurant.name}
                      ></iframe>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default RestaurantDetails;