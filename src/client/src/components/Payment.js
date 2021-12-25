
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Payment.css";
import { useNavigate, useParams, Link } from "react-router-dom";

function Payment() {
    let navigate = useNavigate();
    const [CardholderName, setCardholderName] = useState("");
    const [CardNumber, setCardNumber] = useState("");
    const [CVV, setCVV] = useState("");
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
    
    
    
    function pay() {
      console.log(Age);
      axios
        .post("http://localhost:3000/api/v1/reservation/Payment", {
          HomeAddress,
          CountryCode,
          PassportNumber,
          PhoneNumber,
          Age,
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
      <h2>{}</h2>
      <div className="login">
        <div className="child">
          <form>
            <div className="mb-3 username">
              <label for="Card Holder Name" className="form-label">
                Card Holder Name
              </label>
              <input
                type="Card Holder Name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setCardholderName(e.target.value)}
              />
            </div>
            <div className="mb-3 username">
              <label for="exampleInputPassword1" className="form-label">
                Card Number 
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setCardNumber(e.target.value)}
              />              
            </div>
            <div className="mb-3 username">
              <label for="exampleInputPassword1" className="form-label">
                CVV
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputCVV"
                onChange={(e) => setCVV(e.target.value)}
              />
              


              
            </div>

            <button type="submit" className="btn btn-primary " onClick={ navigate = ""} >
              Submit
            </button>
            
            <button type="submit" className="btn btn-primary " onClick={ navigate = ""}>
              Cancel
            </button>

          </form>
        </div>
      </div>
      <h2>{}</h2>
    </div>
  );

   
}
    export default Payment;