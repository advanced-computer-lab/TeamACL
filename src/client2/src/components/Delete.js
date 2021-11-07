import React from "react";

function Delete() {
  const [flightNumber, setFlightNumber] = useState();

  const [airport, setAirport] = useState();
  function hamada() {
    axios.post("http://localhost:8000/delete-flight", {
      flightNumber: flightNumber,
      airport: airport,
    });
  }
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
      <button onClick={hamada}>delete</button>
    </div>
  );
}

export default Delete;
