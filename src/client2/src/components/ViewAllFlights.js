import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import UpdateFlight from "./UpdateFlight";
import Delete from "./Delete";
import Nav from "./Nav";

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
        <Nav/>
        
        <div class = "viewflight" >
       
          <big>
          <label for="FlightNumber"> FlightNumber:</label>
          <label>{a.FlightNumber} </label>
          </big>


          <div>
          <label for="DepartureTime"> DepartureTime:</label>
          <label>{a.DepartureTime}</label>
          </div>

          <div>
          <label for="ArrivalTime"> ArrivalTime:</label>
          <label>{a.ArrivalTime}</label>
          </div>
          <div>
          <label for="DateOfFlight"> DateOfFlight:</label>
          <label>{a.DateOfFlight}</label>
          </div>

          <div>
          <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
          <label>{a.NumberOfEconomySeats}</label>
          </div>

          <div>
          <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
          <label>{a.NumberOfBusinessSeats}</label>
          </div>  

          <div>
          <label for="NumberOfFirstClassSeats"> NumberOfFirstClassSeats:</label>
          <label>{a.NumberOfFirstClassSeats}</label>
          </div>
          <div>
          <label for="Airport"> Airport:</label>
          <label>{a.Airport}</label>
          </div>




          <div>
          <label for="DepartureTerminals"> DepartureTerminals:</label>
          <label>{a.DepartureTerminals}</label>
          </div>

          <div>
          <label for="ArrivalTerminals"> ArrivalTerminals:</label>
          <label>{a.ArrivalTerminals}</label>
          </div>

          <div>
          <label for="From"> From:</label>
          <label>{a.From}</label>
          </div>

          <div>
          <label for="To"> To:</label>
          <label>{a.To}</label>
          </div>

          <div>
          <label for="ArrivalDate"> ArrivalDate:</label>
          <label>{a.ArrivalDate}</label>
          </div>

          <div>
          <label for="DepartureDate"> Departure Date:</label>
          <label>{a.DepartureDate}</label>
          </div>

          <div>
          <label for="FlightType"> Flight Type:</label>
          <label>{a.TypeOfFlight}</label>
          </div>
          
          <div>
          <label for="DurationInHrs"> Duration:</label>
          <label>{a.DurationInHrs}</label>
          </div>

          <div>
         <label for="TotalTicketPrice"> Ticket Price:</label>
          <label>{a.TotalTicketPrice}</label>
          </div>

          <div>
          <label for="BaggageAllowance"> Baggage Allowance:</label>
          <label>{a.BaggageAllowance}</label>
          </div>

          <div>
          <label for="Cabin"> Cabin:</label>
          <label>{a.Cabin}</label>
          </div>
          <div>
          <label for="NumberOfPassengers"> NumberOfPassengers:</label>
          <label>{a.NumberOfPassengers}</label>
          </div>


          <p>
            <br></br>
          </p>
          
          <button onClick={handleUpdate}>Update </button>
          
          {showUpdateForm ? <UpdateFlight id={a._id} /> : <></>}
          {setShowDeleteForm ? <Delete id={a._id} /> : <></>}
          

          </div> </div>
      
      );
    }
    )
    
    
    );
}
export default ViewAllFlights;