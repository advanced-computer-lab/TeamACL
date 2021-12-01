import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setServers } from "dns";
import MoreDetailsDep from "./MoreDetailsDep";
const bodyParser = require('body-parser')


function UserSearch() {
  const [Flag, setFlag]= useState();
  const [DepartureDate, setDepartureDate] = useState();
  const [ArrivalDate, setArrivalDate] = useState();
  const [NumberOfPassengers, setNumberOfPassengers] = useState();
  const [DepartureAirportTerminal, setDepartureAirportTerminal] = useState();
  const [ArrivalAirportTerminal, setArrivalAirportTerminal] = useState();
  const [Cabin, setCabin] = useState();

  const [U, setU] = useState(false);
  const [S, setS] = useState([]);

  function sub() {
    const body = {};
      if (DepartureDate !== "") {
        body["DepartureDate"] = DepartureDate;
      }
      if (ArrivalDate !== "") {
        body["Arrivaldate"] = ArrivalDate;
      }
      if (NumberOfPassengers!== "") {
        body["NumberOfPassengers"] = NumberOfPassengers;
      }
      if ( DepartureAirportTerminal!== "") {
        body["DepartureAirportTerminal"] = DepartureAirportTerminal;
      }
      if ( ArrivalAirportTerminal!== "") {
        body["ArrivalAirportTerminal"] =ArrivalAirportTerminal;
      }
      if (Cabin !== "") {
        body["Cabin"] = Cabin;
      }
      console.log("from frontend user search");
      console.log(body);
      
      axios
        .post(`http://localhost:3000/api/v1/flights/findFlight`, body)
        .then((res) => {
          setS(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log("error herererere"));
  }
  function FuncFlag() {
    setFlag(true);
    }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Search</h1>
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
        <label for="DepartureAirportTerminal">DepartureAirportTerminal:</label>
        <input
          type="text"
          id="DepartureAirportTerminal"
          name="DepartureAirportTerminal"
          onChange={(event) => setDepartureAirportTerminal(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="ArrivalAirportTerminal">ArrivalAirportTerminal:</label>
        <input
          type="text"
          id="ArrivalAirportTerminal"
          name="ArrivalAirportTerminal"
          onChange={(event) => setArrivalAirportTerminal(event.target.value)}
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
          <div><label for="DepartureDate"> Departure Date: </label>{val.DepartureDate}</div>
          <div><label for="ArrivalDate">Arrival Date: </label>{val.ArrivalDate}</div>
          <div><label for="NumberOfPassengers"> Number Of Passengers: </label>{val.NumberOfPassengers}</div>
          <div><label for="DepartureAirportTerminal">Departure Airport Terminal: </label>{val.DepartureAirportTerminal}</div>
          <div><label for="ArrivalAirportTerminal">Arrival Airport Terminal: </label>{val.ArrivalAirportTerminal}</div>
          <div><label for="Cabin">Cabin: </label>{val.Cabin}</div>
          <button onClick={FuncFlag}>Choose </button>
          {Flag ? <MoreDetailsDep id={val.id} /> : <></>}
          
            </div>
            
       
      ))}
    </div>
  );
}

export default UserSearch;
