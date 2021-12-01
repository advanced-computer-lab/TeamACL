import { useState, useEffect } from "react";
import axios from "axios";

const MoreDetailsDep = ({ Ifd }) => {
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [TripDuration, setTripDuration] = useState();
  const [Cabin, setCabin] = useState();
  const [BaggageAllowance, setBaggageAllowance] = useState();
  console.log(Ifd)
  //flight number, departure and arrival times, trip duration, cabin class and baggage allowance.
  return (
   
        <div key={Ifd}>
          <div><label for="FlightNumber">Flight Number: {Ifd}</label></div>
          
        
          {/* <button onClick={FuncFlag}>Choose </button>
          {Flag ? <MoreDetailsDep id={val.id} /> : <></>} */}
        </div>
      
  );
};
export default MoreDetailsDep;
