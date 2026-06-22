function ManageUsers() {

  const users = [
    {
      id:1,
      name:"Ravi",
      email:"ravi@gmail.com"
    },
    {
      id:2,
      name:"Kiran",
      email:"kiran@gmail.com"
    }
  ];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Users
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-primary">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {users.map((user)=>(
            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>

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

export default ManageUsers;