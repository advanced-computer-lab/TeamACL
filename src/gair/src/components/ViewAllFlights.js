import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import UpdateFlight from "./UpdateFlight";
import Delete from "./Delete";


const ViewAllFlights = () =>   {
    const [list, setList] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const [ViewDepartureDetails, setViewDepartureDetails] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);
  const [ShowSelecteDepartureForm,setShowSelecteDepartureForm] = useState(false);
  const [showUserSearchForm , setShowUserSearchForm] = useState(false);
  const [test, setTest]= useState(false);
  const [DepartureTerminals, setDepartureTerminals] = useState(false);
  const [ArrivalTerminals, setArrivalTerminals] = useState(false);
  //const [Type, setFlightType]= useState(false);
  function handleUpdate() {
      setShowUpdateForm(true);
    }
    function handledelete(){
        setShowDeleteForm(true);
    }
 useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/flights`)
      .then((res) => {
        console.log(res.data.data.flights);
        setList(res.data.data.flights);
      })
      .catch((err) => console.log(err));
  }, []);
  
   return(
    
    list.map((a) => {
      return (
        <div>
          <label for="FlightNumber"> FlightNumber:</label>
          <label>{a.FlightNumber}</label>

          <label for="DepartureTime"> DepartureTime:</label>
          <label>{a.DepartureTime}</label>

          <label for="ArrivalTime"> ArrivalTime:</label>
          <label>{a.ArrivalTime}</label>

          <label for="DateOfFlight"> DateOfFlight:</label>
          <label>{a.DateOfFlight}</label>

          <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
          <label>{a.NumberOfEconomySeats}</label>

          <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
          <label>{a.NumberOfBusinessSeats}</label>

          <label for="NumberOfFirstClassSeats"> NumberOfFirstClassSeats:</label>
          <label>{a.NumberOfFirstClassSeats}</label>

          <label for="Airport"> Airport:</label>
          <label>{a.Airport}</label>

          <label for="DepartureTerminals"> DepartureTerminals:</label>
          <label>{a.DepartureTerminals}</label>

          <label for="ArrivalTerminals"> ArrivalTerminals:</label>
          <label>{a.ArrivalTerminals}</label>

          <label for="From"> From:</label>
          <label>{a.From}</label>

          <label for="To"> To:</label>
          <label>{a.To}</label>

          <label for="ArrivalDate"> ArrivalDate:</label>
          <label>{a.ArrivalDate}</label>
         
          <label for="DepartureDate"> Departure Date:</label>
          <label>{a.DepartureDate}</label>

          <label for="FlightType"> Flight Type:</label>
          <label>{a.TypeOfFlight}</label>

          <label for="DurationInHrs"> Duration:</label>
          <label>{a.DurationInHrs}</label>

          <label for="TotalTicketPrice"> Ticket Price:</label>
          <label>{a.TotalTicketPrice}</label>

          <label for="BaggageAllowance"> Baggage Allowance:</label>
          <label>{a.BaggageAllowance}</label>

          <label for="Cabin"> Cabin:</label>
          <label>{a.Cabin}</label>

          <label for="NumberOfPassengers"> NumberOfPassengers:</label>
          <label>{a.NumberOfPassengers}</label>



          <p>
            <br></br>
          </p>

          <button onClick={handleUpdate}>Update </button>
          
          {showUpdateForm ? <UpdateFlight id={a._id} /> : <></>}
          {setShowDeleteForm ? <Delete id={a._id} /> : <></>}
          

        </div>
      );
    }
    ));
}
export default ViewAllFlights;