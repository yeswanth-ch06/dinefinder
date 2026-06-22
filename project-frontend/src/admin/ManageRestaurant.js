function ManageRestaurant() {

  const restaurants = [
    {
      id:1,
      name:"Pizza Hub",
      location:"Vizag",
      rating:4.5
    },
    {
      id:2,
      name:"Burger Point",
      location:"Vizianagaram",
      rating:4.2
    }
  ];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Restaurants
      </h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {restaurants.map((r)=>(
            <tr key={r.id}>

              <td>{r.id}</td>

              <td>{r.name}</td>

              <td>{r.location}</td>

              <td>{r.rating}</td>

              <td>

                <button
                  className="btn btn-warning me-2"
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ManageRestaurant;