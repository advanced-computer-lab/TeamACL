import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const MoreDetailsDep = () => {
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [TripDuration, setTripDuration] = useState();
  const [Cabin, setCabin] = useState();
  const [BaggageAllowance, setBaggageAllowance] = useState();
  const [flight, setFlight] = useState(null);
    const {Ifd }= useParams()
  console.log(Ifd)
  //use ifd to getFlight
  
  useEffect(() => {
    axios
    .post(`http://localhost:3000/api/v1/flights/findFlight`, {FlightNumber: Ifd})
    .then((res) => {
        setFlight(res.data[0])
      console.log(res.data)
    })
    .catch((err) => console.log("error herererere"));
  }, [])
  //flight number, departure and arrival times, trip duration, cabin class and baggage allowance.
  return (
   <div>
    {flight && <div>
          <div><label for="FlightNumber">Flight Number:{flight.FlightNumber}</label></div>
          
        
          {/* <button onClick={FuncFlag}>Choose </button>
          {Flag ? <MoreDetailsDep id={val.id} /> : <></>} */}
        </div>}
        </div> 
  );
};
export default MoreDetailsDep;
