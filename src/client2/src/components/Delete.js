import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Delete({ id }) {
  //const [FlightNumber, setFlightNumber] = useState();
  const [U, setU] = useState(false);
  // const [Airport, setAirport] = useState();

  //function hamada() {
  // axios.delete(`http://localhost:3000/api/v1/flights/${id}`, {
  // FlightNumber: FlightNumber,
  //Airport: Airport,
  //});

  useEffect(() => {
    if (U) {
      console.log("from frontend");
      //console.log(FlightNumber);
      axios
        .delete(`http://localhost:3000/api/v1/flights/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }
  return (
    <button
      onClick={() => {
        if (window.confirm("Are you sure you wish to delete this item?")) {
          sub();
        }
      }}
    >
      Delete
    </button>
    // <div>
    //   <button onClick={sub}>delete</button>
    // </div>
  );
}

export default Delete;
