import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Admin Dashboard
      </h2>

      <div className="row">

        <div className="col-md-3">

          <div className="card bg-primary text-white">
            <div className="card-body" onClick={()=>navigate("/admin/manage-restaurants")}>
              Restaurants
              <h3>25</h3>
            </div>
          </div>

        </div>

        <div className="col-md-3">

          <div className="card bg-success text-white">
            <div className="card-body">
              Users
              <h3>150</h3>
            </div>
          </div>

        </div>

        <div className="col-md-3">

          <div className="card bg-warning text-dark">
            <div className="card-body">
              Bookings
              <h3>70</h3>
            </div>
          </div>

        </div>

        <div className="col-md-3">

          <div className="card bg-danger text-white">
            <div className="card-body">
              Reviews
              <h3>120</h3>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;