import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setServers } from "dns";

function SearchFlight() {
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

  const [U, setU] = useState(false);
  const [S, setS] = useState([]);

  useEffect(() => {
    if (U) {
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
        .get(`http://localhost:3000/api/v1/flights/`, body)
        .then((res) => setS(res.data))
        .catch((err) => console.log(err));
      setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }

  return (
    <div>
      <form>
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
        <label for="NumberOfEconomySeats">NumberOfEconomySeats:</label>
        <input
          type="text"
          id="NumberOfEconomySeats"
          name="NumberOfEconomySeats"
          onChange={(event) => setNumberOfEconomySeats(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="NumberOfBusinessSeats">NumberOfBusinessSeats:</label>
        <input
          type="text"
          id="NumberOfBusinessSeats"
          name="NumberOfBusinessSeats"
          onChange={(event) => setNumberOfBusinessSeats(event.target.value)}
        />
        <p>
          <br></br>
        </p>
        <label for="NumberOfFirstSeats">NumberOfFirstSeats:</label>
        <input
          type="text"
          id="NumberOfFirstSeats"
          name="NumberOfFirstSeats"
          onChange={(event) => setNumberOfFirstSeats(event.target.value)}
        />
        <p>
          <br></br>
        </p>
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

      {S.map((val) => {
        <div>
          <div>{val.FlightNumber}</div>
          <div>{val.DepartureTime}</div>
          <div>{val.ArrivalTime}</div>
          <div>{val.DateOfFlight}</div>
          <div>{val.NumberOfEconomySeats}</div>
          <div>{val.NumberOfBusinessSeats}</div>
          <div>{val.From}</div>
          <div>{val.To}</div>
        </div>;
      })}
    </div>
  );
}

export default SearchFlight;
