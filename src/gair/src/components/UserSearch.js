import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setServers } from "dns";
import MoreDetailsDep from "./MoreDetailsDep"; 
import {useNavigate, Navigate} from 'react-router-dom';
//import { setFlagsFromString } from "v8";
const bodyParser = require('body-parser')



function UserSearch() {
  
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [DateOfFlight, setDateOfFlight] = useState();
  const [NumberOfEconomySeats, setNumberOfEconomySeats] = useState();
  const [NumberOfBusinessSeats, setNumberOfBusinessSeats] = useState();
  const [NumberOfFirstSeats, setNumberOfFirstSeats] = useState();
  const [Airport, setAirport] = useState();
  const [AirportTerminals, setAirportTerminals] = useState();
  const [From, setFrom] = useState();
  const [To, setTo] = useState();
  const[Flag,setFlag] = useState();

  const [U, setU] = useState(false);
  const [S, setS] = useState([]);



  function sub() {
    const body = {};
      if (FlightNumber !== "") {
        body["FlightNumber"] = FlightNumber;
      }
      if (DepartureTime !== "") {
        body["DepartureTime"] = DepartureTime;
      }
      if (ArrivalTime !== "") {
        body["ArrivalTime"] = ArrivalTime;
      }
      if (DateOfFlight !== "") {
        body["DateOfFlight"] = DateOfFlight;
      }
      if (NumberOfEconomySeats !== "") {
        body["NumberOfEconomySeats"] = NumberOfEconomySeats;
      }
      if (NumberOfBusinessSeats !== "") {
        body["NumberOfBusinessSeats"] = NumberOfBusinessSeats;
      }
      if (NumberOfFirstSeats !== "") {
        body["NumberOfFirstSeats"] = NumberOfFirstSeats;
      }
      if (Airport !== "") {
        body["Airport"] = Airport;
      }
      if (AirportTerminals !== "") {
        body["AirportTerminals"] = AirportTerminals;
      }
      if (From !== "") {
        body["From"] = From;
      }
      if (To !== "") {
        body["To"] = To;
      }
      console.log("from frontend");
      console.log(body);
      
      axios
        .post(`http://localhost:3000/api/v1/flights/findFlight`, body)
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
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Search</h1>
        <label for="FlightNumber">FlightNumber:</label>
        <input
          type="text"
          id="FlightNumber"
          name="FlightNumber"
          onChange={(event) => setFlightNumber(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="DepartureTime">DepartureTime:</label>
        <input
          type="text"
          id="DepartureTime"
          name="DepartureTime"
          onChange={(event) => setDepartureTime(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="ArrivalTime">ArrivalTime:</label>
        <input
          type="text"
          id="ArrivalTime"
          name="ArrivalTime"
          onChange={(event) => setArrivalTime(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="DateOfFlight">DateOfFlight:</label>
        <input
          type="text"
          id="DateOfFlight"
          name="DateOfFlight"
          onChange={(event) => setDateOfFlight(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        {/* <label for="NumberOfEconomySeats">NumberOfEconomySeats:</label>
        <input
          type="text"
          id="NumberOfEconomySeats"
          name="NumberOfEconomySeats"
          onChange={(event) => setNumberOfEconomySeats(event.target.value)}
        />
        <p>
          <br></br>
        </p> */}
        {/* <label for="NumberOfBusinessSeats">NumberOfBusinessSeats:</label>
        <input
          type="text"
          id="NumberOfBusinessSeats"
          name="NumberOfBusinessSeats"
          onChange={(event) => setNumberOfBusinessSeats(event.target.value)}
        />
        <p>
          <br></br>
        </p> */}
        {/* <label for="NumberOfFirstSeats">NumberOfFirstSeats:</label>
        <input
          type="text"
          id="NumberOfFirstSeats"
          name="NumberOfFirstSeats"
          onChange={(event) => setNumberOfFirstSeats(event.target.value)}
        />
        <p>
          <br></br>
        </p> */}
        <label for="Airport">Airport:</label>
        <input
          type="text"
          id="Airport"
          name="Airport"
          onChange={(event) => setAirport(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="AirportTerminals">AirportTerminals:</label>
        <input
          type="text"
          id="AirportTerminals"
          name="AirportTerminals"
          onChange={(event) => setAirportTerminals(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="From">From:</label>
        <input
          type="text"
          id="From"
          name="From"
          onChange={(event) => setFrom(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="To">To:</label>
        <input
          type="text"
          id="To"
          name="To"
          onChange={(event) => setTo(event.target.value)}
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
          <div><label for="FlightNumber">Flight Number: </label>{val.FlightNumber}</div>
          <div><label for="DepartureTime">Departure Time: </label>{val.DepartureTime}</div>
          <div><label for="ArrivalTime">Arrival Time: </label>{val.ArrivalTime}</div>
          <div><label for="DateOfFlight">Date Of Flight: </label>{val.DateOfFlight}</div>
          <div><label for="AirportTerminals">Airport Terminals: </label>{val.AirportTerminals}</div>
          {/* <div>{val.NumberOfEconomySeats}</div>
          <div>{val.NumberOfBusinessSeats}</div> */}
          <div><label for="From">From: </label>{val.From}</div>
          <div><label for="To">To: </label>{val.To}</div>
        
          {/* <button onClick={FuncFlag}>Choose </button>
          {Flag ? <Navigate to={`/MoreDetailsDep/${val.FlightNumber}`} /> : <></>} */}
        </div>
      ))}
      {/* {Flag && details!==null  && <Navigate to={`/MoreDetailsDep/${details}`} />} */}
    </div>
  );
}

export default UserSearch;
