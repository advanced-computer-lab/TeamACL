import React from "react";
import { useState } from "react";
import axios from "axios";

function SearchFlight() {
  axios.post("http://localhost:8000/search-flight", {
    flightNumber: flightNumber,
    airport: airport,
    departure: departure,
    arrival: arrival,
    date: date,
    numberOfEconomySeats: numberOfEconomySeats,
    numberOfBusinessClassSeats: numberOfBusinessClassSeats,
    airportTerminals: airportTerminals,
    from: from,
    to: to,
    flightDate: flightDate,
    cabin: cabin,
    seatsAvailableOnFlight: seatsAvailableOnFlight,
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
      <input
        type="text"
        id="Departure"
        name="Departure"
        onChange={(event) => setDeparture(event.target.value)}
      />
      <input
        type="text"
        id="Arrival"
        name="Arrival"
        onChange={(event) => setArrival(event.target.value)}
      />
      <input
        type="text"
        id="Date"
        name="Date"
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="text"
        id="NumberOfEconomySeats"
        name="NumberOfEconomySeats"
        onChange={(event) => setNumberOfEconomySeats(event.target.value)}
      />
      <input
        type="text"
        id="NumberOfBusinessClassSeats"
        name="NumberOfBusinessClassSeats"
        onChange={(event) => setNumberOfBusinessClassSeats(event.target.value)}
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
      <input
        type="text"
        id="FlightDate"
        name="FlightDate"
        onChange={(event) => setFlightDate(event.target.value)}
      />
      <input
        type="text"
        id="Cabin"
        name="Cabin"
        onChange={(event) => setCabin(event.target.value)}
      />
      <input
        type="text"
        id="SeatsAvailableOnFlight"
        name="SeatsAvailableOnFlight"
        onChange={(event) => setSeatsAvailableOnFlight(event.target.value)}
      />
      <button onClick={hamada}>search</button>
    </div>
  );
}

export default SearchFlight;
