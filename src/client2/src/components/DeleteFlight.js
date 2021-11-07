import React from "react";
import { useState } from "react";
import axios from "axios";

function Xxxx() {
  axios.post("http://localhost:8000/delete-flight", {
    flightNumber: flightNumber,
    airport: airport,
  });

  return (
    <div>
      <input
        type="text"
        id="FlightNumber"
        name="FlightNumber"
        onChange={(event) => setFlightNumber(event.target.value)}
      />
      <input
        type="text"
        id="Airport"
        name="Airport"
        onChange={(event) => setAirport(event.target.value)}
      />
      <button onClick={Xxxx}>delete</button>
    </div>
  );
}

export default Xxxx;
