import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const MoreDetailsDep = () => {
  const [FlightNumber, setFlightNumber] = useState();const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();const [DepartureDate, setDepartureDate] = useState();
  const [ArrivalDate, setArrivalDate] = useState();const [DurationInHrs, setDurationInHrs] = useState(); const [DateOfFlight, setDateOfFlight] = useState();
  const [Cabin, setCabin] = useState();const [BaggageAllowance, setBaggageAllowance] = useState();
  const [U, setU] = useState();
  const [flight, setFlight] = useState(null);
    const {Ifd }= useParams()
  console.log(Ifd)
  //use ifd to getFlight
  useEffect(() => {
    if (U) {
        axios
        // .put(`http://localhost:3000/api/v1/flights/${id}`, body)
             .post(`http://localhost:3000/api/v1/WishList/${flight.FlightNumber}/${flight.DepartureTime}/${flight.ArrivalTime}/${flight.DepartureDate}/${flight.ArrivalDate}/${flight.DurationInHrs}/${flight.DateOfFlight}/${flight.NumberOfEconomySeats}/${flight.NumberOfBusinessSeats}/${flight.NumberOfFirstClassSeats}/${flight.Airport}/${flight.DepartureTerminals}/${flight.ArrivalTerminals}/${flight.From}/${flight.To}/${flight.TotalTicketPrice}/${flight.BaggageAllowance}/${flight.TypeOfFlight}/${flight.Cabin}`, { 
                FlightNumber: flight.FlightNumber,
                DepartureTime: flight.DepartureTime,
                ArrivalTime: flight.ArrivalTime,
                DepartureDate: flight.DepartureDate,
                ArrivalDate: flight.ArrivalDate,
                DurationInHrs:flight.DurationInHrs,
                DateOfFlight: flight.DateOfFlight,
                NumberOfEconomySeats: flight.NumberOfEconomySeats,
                NumberOfBusinessSeats: flight.NumberOfBusinessSeats,
                NumberOfFirstClassSeats: flight.NumberOfFirstClassSeats,
                Airport: flight.Airport,
                DepartureTerminals: flight.DepartureTerminals,
                ArrivalTerminals: flight.ArrivalTerminals,
                From: flight.From,
                To: flight.To,
                TotalTicketPrice: flight.TotalTicketPrice,
                BaggageAllowance: flight.BaggageAllowance,
                TypeOfFlight: flight.TypeOfFlight,
                Cabin: flight.Cabin,
                //NumberOfPassengers: flight.NumberOfPassengers,                                
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
   return (
   <div>
    {flight && <div>

          <div><label for="FlightNumber">Flight Number:{flight.FlightNumber}</label></div>
          <div><label for="DepartureTime">Departure Time:{flight.DepartureTime}</label></div>
          <div><label for="Arrival Time">Arrival Time:{flight.ArrivalTime}</label></div>
          <div><label for="TripDuration">Trip Duration:{flight.TripDuration}</label></div>
          <div><label for="Cabin">Cabin:{flight.Cabin}</label></div>
          <div><label for="BaggaegAllowance">Baggage Allowance:{flight.BaggageAllowance}</label></div>
          <button type="Add to wishlist" value="Add to wishlist " onClick={sub}>
          Add to wishlist{" "}
          </button>                          
          {/* <button onClick={FuncFlag}>Choose </button>
          {Flag ? <MoreDetailsDep id={val.id} /> : <></>} */}
        </div>}
        </div> 
  );
};
export default MoreDetailsDep;
