import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){
  const navigate = useNavigate();



  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  };

  return (

    <div className="container">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow mt-5">

            <div className="card-header bg-success text-white">
              <h4>User Registration</h4>
            </div>

            <div className="card-body">

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="email"
                name="name"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
              />
              <input

              type="number"
                name="name"
                placeholder="Number"
                className="form-control mb-3"
                onChange={handleChange}/>

                <input

              type="text"
                name="name"
                placeholder="Adress"
                className="form-control mb-3"
                onChange={handleChange}/>

              <button
                className="btn btn-success w-100" onClick={()=>navigate("/")}
              >
                Register
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;