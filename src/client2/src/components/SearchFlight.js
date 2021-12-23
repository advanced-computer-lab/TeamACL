import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setServers } from "dns";
import MoreDetailsDep from "./MoreDetailsDep"; 
import {useNavigate, Navigate, Link} from 'react-router-dom';
//import { setFlagsFromString } from "v8";
const bodyParser = require('body-parser')



function SearchFlight() {
  const[NumberOfPassengers, setNumberOfPassengers] = useState();
  const [DepartureTerminals, setDepartureTerminals] = useState();
  const [ArrivalTerminals, setArrivalTerminals] = useState();
  const [DepartureDate, setDepartureDate] = useState();
  const [ArrivalDate, setArrivalDate] = useState();
  const [Cabin, setCabin] = useState();
  const [Flag ,setFlag] = useState();
  

  const [U, setU] = useState(false);
  const [S, setS] = useState([]);

  // useEffect(() => {
  //   if (U) {
      
  //     //setU(false);
  //   }
    
  // }, [U]);

  function sub() {
    const body = {};
    if (NumberOfPassengers !== "") {
      body["NumberOfPassengers"] = NumberOfPassengers;
    }
      if (DepartureTerminals !== "") {
        body["DepartureTerminals"] = DepartureTerminals;
      }
      if (ArrivalTerminals !== "") {
        body["ArrivalTerminals"] = ArrivalTerminals;
      }
      if (DepartureDate !== "") {
        body["DepartureDate"] = DepartureDate;
      }
      if (ArrivalDate !== "") {
        body["ArrivalDate"] = ArrivalDate;
      }
      if (Cabin !== "") {
        body["Cabin"] = Cabin;
      }
      
      console.log("from frontend");
      console.log(body);
      
      axios
        .post(`http://localhost:3000/api/v1/flights/departure-flights`, body)
        .then((res) => {
          setS(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log("error herererere"));
  }
  const [details, setDetails] = useState(null)
  //const navigate = useNavigate();
  function FuncFlag(){
    setFlag(true);
  }


  return (
    
    <div>
        <ul>
    <li><a href="/Profile">Profile</a></li>
    <li><a href="/SearchFlight">SearchFlight </a></li>
    <li><a href="/SearchReturnFlights">Search returning Flights </a></li>
  </ul>
  <ul class = "formlookplane">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Search for Leaving flights</h1>
        <label for="NumberOfPassengers">NumberOfPassengers:</label>
        <input
          type="text"
          id="NumberOfPassengers"
          name="NumberOfPassengers"
          onChange={(event) => setNumberOfPassengers(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="DepartureTerminals">Departure Terminal:</label>
        <input
          type="text"
          id="DepartureTerminals"
          name="DepartureTerminals"
          onChange={(event) => setDepartureTerminals(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="DepartureDate">DepartureDate:</label>
        <input
          type="text"
          id="DepartureDate"
          name="DepartureDate"
          onChange={(event) => setDepartureDate(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="ArrivalDate">ArrivalDate:</label>
        <input
          type="text"
          id="ArrivalDate"
          name="ArrivalDate"
          onChange={(event) => setArrivalDate(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="Cabin">Cabin:</label>
        <input
          type="text"
          id="Cabin"
          name="Cabin"
          onChange={(event) => setCabin(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        
        <button type="Update Flight" value="Update Flight" onClick={sub}>
          Search flight{" "}
        </button>
      </form>

      {S.map((val) => (
        <div key={val._id}>
          <div><label for="DepartureTerminals">DepartureTerminals: </label>{val.DepartureTerminals}</div>
          <div><label for="DepartureDate">Departure Date: </label>{val.DepartureDate}</div>
          <div><label for="ArrivalDate">Arrival Date: </label>{val.ArrivalDate}</div>
          <div><label for="From">From: </label>{val.From}</div>
          <div><label for="To">To: </label>{val.To}</div>
        
          <button onClick={FuncFlag}>Show more details </button>
          {Flag ? <Navigate to={`/MoreDetailsDep/${val.FlightNumber}`} /> : <></>}
        </div>
      ))}
      {/* {Flag && details!==null  && <Navigate to={`/MoreDetailsDep/${details}`} />} */}
    </ul>
    </div>
  );
}

export default SearchFlight;
