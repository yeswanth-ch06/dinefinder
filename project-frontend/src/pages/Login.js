import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
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
                    type="email"
                    placeholder="email"
                    className="form-control"
                    onChange={(e)=>
                    setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    onChange={(e)=>
                    setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-danger w-100" onClick={()=>navigate("/restaurant")}
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

export default Login;