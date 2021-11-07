import React from "react";
import { useState } from "react";
import axios from "axios";

function SearchFlight() {
  axios.post("http://localhost:3000/api/v1/flights", {
            FlightNumber: FlightNumber,
            DepartureTime: DepartureTime,
            ArrivalTime: ArrivalTime,
            DateOfFlight: DateOfFlight,
            NumberOfEconomySeats: NumberOfEconomySeats,
            NumberOfBusinessSeats: NumberOfBusinessSeats,
            NumberOfFirstSeats: NumberOfFirstSeats,
            Airport: Airport,
            AirportTerminals : AirportTerminals,
            From: From,
            To: To,
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
        id="DepartureTime"
        name="DepartureTime"
        onChange={(event) => setDepartureTime(event.target.value)}
      />
      <input
        type="text"
        id="ArrivalTime"
        name="ArrivalTime"
        onChange={(event) => setArrivalTime(event.target.value)}
      />
      <input
        type="text"
        id="DateOfFlight"
        name="DateOfFlight"
        onChange={(event) => setDateOfFlight(event.target.value)}
      />
      <input
        type="text"
        id="NumberOfEconomySeats"
        name="NumberOfEconomySeats"
        onChange={(event) => setNumberOfEconomySeats(event.target.value)}
      />
      <input
        type="text"
        id="NumberOfBusinessSeats"
        name="NumberOfBusinessSeats"
        onChange={(event) => setNumberOfBusinessSeats(event.target.value)}
      />
      <input
        type="text"
        id="NumberOfFirstSeats"
        name="NumberOfFirstSeats"
        onChange={(event) => setNumberOfFirstSeats(event.target.value)}
      />
      <input
        type="text"
        id="Airport"
        name="Airport"
        onChange={(event) => setAirport(event.target.value)}
      />
      <input
        type="text"
        id="AirportTerminals"
        name="AirportTerminals"
        onChange={(event) => setAirportTerminals(event.target.value)}
      />
      <input
        type="text"
        id="From"
        name="From"
        onChange={(event) => setFrom(event.target.value)}
      />
      <input
        type="text"
        id="To"
        name="To"
        onChange={(event) => setTo(event.target.value)}
      />
      
      <button onClick={hamada}>search</button>
    </div>
  );
}

export default SearchFlight;