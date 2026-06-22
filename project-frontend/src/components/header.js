import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          FoodHub
        </Link>

        {/* Search Bar */}
        <form className="d-flex ms-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Restaurants..."
            aria-label="Search"
          />

          <button
            className="btn btn-light"
            type="submit"
          >
            Search
          </button>
        </form>

      </div>
    </nav>
  );
}

export default Header;