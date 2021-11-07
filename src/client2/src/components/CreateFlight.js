import { useState } from "react";
import axios from "axios";
const CreateFlight = () => {
  const [flightNumber, setFlightNumber] = useState();
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [Date, setDate] = useState();
  const [numberOfEconomySeats, setNumberOfEconomySeats] = useState();
  const [numberOfBusinessClassSeats, setNumberOfBusinessClassSeats] =
    useState();
  const [airport, setAirport] = useState();
  const [airportTerminals, setAirportTerminals] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [flightDate, setFlightDate] = useState();
  const [cabin, setCabin] = useState();
  const [seatsAvailableOnFlight, setSeatsAvailableOnFlight] = useState();

  console.log(flightNumber);
  const sub = function (e) {
    e.preventDefault();
    axios.post(
      "http://localhost:8000/add-flight",
      JSON.stringify({
        FlightNumber: flightNumber,
        DepartureTime: departure,
        ArrivalTime: arrival,
        Date: Date,
        NumberOfEconomySeats: numberOfEconomySeats,
        NumberOfBusinessClassSeats: numberOfBusinessClassSeats,
        Airport: airport,
        From: from,
        To: to,
        FlightDate: flightDate,
        Cabin: cabin,
        SeatsAvailableOnFlight: seatsAvailableOnFlight,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  };

  return (
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
      <label for="Departure">Departure:</label>
      <input
        type="text"
        id="Departure"
        name="Departure"
        onChange={(event) => setDeparture(event.target.value)}
      />
      <p>
        <br></br>
      </p>
      <label for="Arrival">Arrival:</label>
      <input
        type="text"
        id="Arrival"
        name="Arrival"
        onChange={(event) => setArrival(event.target.value)}
      />
      <p>
        <br></br>
      </p>
      <label for="Date">Date:</label>
      <input
        type="text"
        id="Date"
        name="Date"
        onChange={(event) => setDate(event.target.value)}
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
      <label for="NumberOfBusinessClassSeats">
        NumberOfBusinessClassSeats:
      </label>
      <input
        type="text"
        id="NumberOfBusinessClassSeats"
        name="NumberOfBusinessClassSeats"
        onChange={(event) => setNumberOfBusinessClassSeats(event.target.value)}
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
      <label for="FlightDate">FlightDate:</label>
      <input
        type="text"
        id="FlightDate"
        name="FlightDate"
        onChange={(event) => setFlightDate(event.target.value)}
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
      <label for="SeatsAvailableOnFlight">SeatsAvailableOnFlight:</label>
      <input
        type="text"
        id="SeatsAvailableOnFlight"
        name="SeatsAvailableOnFlight"
        onChange={(event) => setSeatsAvailableOnFlight(event.target.value)}
      />
      <p>
        <br></br>
      </p>
      <button type="Create Flight" value="Create Flight" onClick={sub}>
        create flight{" "}
      </button>
    </form>
  );
};

export default CreateFlight;
