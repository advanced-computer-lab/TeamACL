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
  const [U, setU] = useState();
  const [flight, setFlight] = useState(null);
    const {Ifd }= useParams()
  console.log(Ifd)
  //use ifd to getFlight
  useEffect(() => {
    if (U) {
        const flagda = 1;
        axios
             .post("http://localhost:3000/api/v1/flights", {
                 
                FlightType: flight.FlightType,
                FlightNumber: flight.FlightNumber,
                DepartureTime: flight.DepartureTime,
                ArrivalTime: flight.ArrivalTime,
                DateOfFlight: flight.DateOfFlight,
                NumberOfEconomySeats: flight.NumberOfEconomySeats,
                NumberOfBusinessSeats: flight.NumberOfBusinessSeats,
                NumberOfFirstSeats: flight.NumberOfFirstSeats,
                Airport: flight.Airport,
                AirportTerminals: flight.AirportTerminals,
                From: flight.From,
                To: flight.To,
                Price: flight.Price,
                BaggageAllowance: flight.BaggageAllowance,
                TripDuration: flight.TripDuration,
                Class: flight.Class,
                NumberOfPassengers: flight.NumberOfPassengers,
        
              })
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
      setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }

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
          <div><label for="DepartureTime">Departure Time:{flight.DepartureTime}</label></div>
          <div><label for="Arrival Time">Arrival Time:{flight.ArrivalTime}</label></div>
          <div><label for="TripDuration">Trip Duration:{flight.TripDuration}</label></div>
          <div><label for="Cabin">Cabin:{flight.Cabin}</label></div>
          <div><label for="BaggaegAllowance">Baggage Allowance:{flight.BaggageAllowance}</label></div>
          <button type="Add to profile" value="Add to profile " onClick={sub}>
          Add to profile{" "}
          </button>
          
        
          {/* <button onClick={FuncFlag}>Choose </button>
          {Flag ? <MoreDetailsDep id={val.id} /> : <></>} */}
        </div>}
        </div> 
  );
};
export default MoreDetailsDep;
