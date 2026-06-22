import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;
    if(name === "srinu" && pass === "srinu"){
        navigate("/admin");
    }
  };

  return (

    <div className="container">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow mt-5">

            <div className="card-header bg-danger text-white">
              <h4>Login</h4>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                  />
                </div>

                <button
                  className="btn btn-danger w-100" type="submit" onClick={()=>navigate("/admin")}
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;