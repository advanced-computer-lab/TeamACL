import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [Message, setMessage] = useState("");

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function login() {
    axios
      .post("http://localhost:3000/api/v1/users/login", {
        Email: Email,
        Password: Password,
      })
      .then((res) => {
        console.log(res.data.data.IsAdmin);
        if (res.data.data.IsAdmin === true) {
          localStorage.setItem("token", res.data.data.token);
          window.location.href = `/AdminHome/${Email}`;
        } else {
          localStorage.setItem("token", res.data.data.token);
          window.location.href = `/userhome/${Email}`;
        }
      })
      .catch((err) => {
        setMessage("wrong email or password");
        console.log(err);
      });
  }

  return (
    <div>
      <h2>{Message}</h2>
      <div className="login">
        <div className="child">
          <form>
            <div className="mb-3 username">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text username">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 username">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary " onClick={login}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <h2>{Message}</h2>
    </div>
  );
}

export default Login;
