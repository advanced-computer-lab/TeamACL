import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Register.css";

function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [CountryCode, setCountryCode] = useState("");
  const [HomeAddress, setHomeAddress] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [Age, setAge] = useState("");
  const [BornIn, setBornIn] = useState("");
  const [LivesIn, setLivesIn] = useState("");
  const [MartialStatus, setMartialStatus] = useState("");
  const [Job, setJob] = useState("");
  function register() {
    console.log(Age);
    axios
      .post("http://localhost:3000/api/v1/users/register", {
        HomeAddress,
        CountryCode,
        PassportNumber,
        PhoneNumber,
        Email,
        Age,
        FirstName,
        LastName,
        Password,
        BornIn,
        LivesIn,
        MartialStatus,
        Job,
      })
      .then((res) => {
        window.location.href = "/login";
      });
  }
  return (
    <div>
      <div className="login">
        <div className="child">
          <div className="input-group username">
            <span className="input-group-text">First and last name</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group flex-nowrap username">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 username">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Passowrd
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group username">
            <span className="input-group-text">
              Phone Number and Country Code
            </span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              onChange={(e) => setCountryCode(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 username">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Home Address
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setHomeAddress(e.target.value)}
            />
          </div>
          <div className="input-group username">
            <span className="input-group-text">Passport Number and Age</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => setPassportNumber(e.target.value)}
            />
            <input
              type="number"
              aria-label="Last name"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-group username">
            <span className="input-group-text">
              Country of Birth And Residance
            </span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => setBornIn(e.target.value)}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              onChange={(e) => setLivesIn(e.target.value)}
            />
          </div>
          <div className="input-group username">
            <span className="input-group-text">Job and Martial Status</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              onChange={(e) => setMartialStatus(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary username"
            onClick={register}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
