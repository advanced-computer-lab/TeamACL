
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Payment.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
require('dotenv').config();

function Payment() {
    let navigate = useNavigate();
    const [CardholderName, setCardholderName] = useState("");
    const [CardNumber, setCardNumber] = useState("");
    const [CVV, setCVV] = useState("");
    const[product,setProduct] = useState({
      name: "Flight",
      Price: 10000,
      productBy: "Gair",
    });
    const makePayment = token  =>{
      const body ={
          token,
          product

      }
      const headers={
        "content-Type": "application/json"

      }
      return axios
      .post("http://localhost:3000/api/v1/reservation/payment", {
        body:JSON.stringify(body)
 
      })
      .then((response) => {
        console.log("RESPONSE",response)
        const{status} = response
        console.log("STATUS",status)
      }
      ).catch(error => console.log(error))
    

    }
    
  
    return (
<div>
      <h2>
        <StripeCheckout stripeKey={process.env.REACT_APP_KEY}
          token= ""
          name="Flight"
          ammount= {product.Price*100}
>
<button className= "btn-large pink">Buy flight</button>

</StripeCheckout>
        
        
        
        </h2>
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

  function Pay() {
    
  }
}


    export default Payment;