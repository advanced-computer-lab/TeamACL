import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setServers } from "dns";

function SearchFlight() {
    
  const [FlightType, setFlightType] = useState();
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [DateOfFlight, setDateOfFlight] = useState();
  const [Airport, setAirport] = useState();
  const [AirportTerminals, setAirportTerminals] = useState();
  const [From, setFrom] = useState();
  const [To, setTo] = useState();
  const [Price, setPrice] = useState();
  const [TripDuration, setTripDuration] = useState();
  const [Class, setClass] = useState();
 
  const [U, setU] = useState(false);
  const [S, setS] = useState([]);

  useEffect(() => {
    if (U) {
      const body = {};
      if (FlightType !== "") {
        body["FlightType"] = FlightType;
      }
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
      if (Price !== "") {
        body["Price"] = Price;
      }
      if (TripDuration !== "") {
        body["TripDuration"] = TripDuration;
      }
      if (Class !== "") {
        body["Class"] = Class;
      }
      
      console.log("from frontend");
      console.log(body);
      axios
        .get(`http://localhost:3000/api/v1/flights/`, body)
        .then((res) => setS(res.data))
        .catch((err) => console.log(err));
      //setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }

  return (
    <div>
      <form>
      <h1>userSearch</h1>
        <label for="FlightNumber">FlightNumber:</label>
        <input
          type="text"
          id="FlightNumber"
          name="FlightNumber"
          onChange={(event) => setFlightNumber(event.target.value)}
        />
        <p>          <br></br>        </p>

        <label for="DepartureTime">DepartureTime:</label>
        <input
          type="text"
          id="DepartureTime"
          name="DepartureTime"
          onChange={(event) => setDepartureTime(event.target.value)}
        />       <p>         <br></br>        </p>

        <label for="ArrivalTime">ArrivalTime:</label>
        <input
          type="text"
          id="ArrivalTime"
          name="ArrivalTime"
          onChange={(event) => setArrivalTime(event.target.value)}
        />
        <p><br></br></p>
        <label for="DateOfFlight">DateOfFlight:</label>
        <input
          type="text"
          id="DateOfFlight"
          name="DateOfFlight"
          onChange={(event) => setDateOfFlight(event.target.value)}
        />
        <p><br></br></p>
       
        <label for="Airport">Airport:</label>
        <input
          type="text"
          id="Airport"
          name="Airport"
          onChange={(event) => setAirport(event.target.value)}
        />
        <p><br></br></p>

        <label for="AirportTerminals">AirportTerminals:</label>
        <input
          type="text"
          id="AirportTerminals"
          name="AirportTerminals"
          onChange={(event) => setAirportTerminals(event.target.value)}
        />
        <p><br></br></p>

        <label for="From">From:</label>
        <input
          type="text"
          id="From"
          name="From"
          onChange={(event) => setFrom(event.target.value)}
        />
        <p> <br></br></p>

        <label for="To">To:</label>
        <input
          type="text"
          id="To"
          name="To"
          onChange={(event) => setTo(event.target.value)}
        />
        <p><br></br></p>

        <label for="Price">Price:</label>
        <input
          type="text"
          id="Price"
          name="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <p><br></br></p>

        <label for="TripDuration">TripDuration:</label>
        <input
          type="text"
          id="TripDuration"
          name="TripDuration"
          onChange={(event) => setTripDuration(event.target.value)}
        />
        <p> <br></br></p>

        <label for="Class">Class:</label>
        <input
          type="text"
          id="Class"
          name="Class"
          onChange={(event) => setClass(event.target.value)}
        />
        <p><br></br> </p>

        <button type="Update Flight" value="Update Flight" onClick={sub}>
          Search flight{" "}
        </button>
      </form>

      {S.map((val) => {
        <div>
          <div>{val.FlightType}</div>  
          <div>{val.FlightNumber}</div>
          <div>{val.DepartureTime}</div>
          <div>{val.ArrivalTime}</div>
          <div>{val.DateOfFlight}</div>
          <div>{val.From}</div>
          <div>{val.To}</div>
          <div>{val.Price}</div>
          <div>{val.TripDuration}</div>
          <div>{val.Class}</div>
          <div>{val.NumberOfPassengers}</div>
        </div>;
      })}
    </div>
  );
}

export default SearchFlight;