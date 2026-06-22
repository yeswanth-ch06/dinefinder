import Navbar from "../components/navabar";
import Footer from "../components/footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow">

          <div className="card-header bg-primary text-white">
            <h3>User Profile</h3>
          </div>

          <div className="card-body">

            <h5>Name : Srinu</h5>

            <h5>Email : srinu@gmail.com</h5>

            <h5>Bookings : 5</h5>

            <h5>Reviews : 10</h5>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;