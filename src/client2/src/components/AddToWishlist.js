// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
// import UpdateFlight from "./UpdateFlight";
// import Delete from "./Delete";

// const AddToWishlist = () =>   {
//  const [list, setList] = useState([]);
// const [showCreateForm, setShowCreateForm] = useState(false);
//   const [showList, setShowList] = useState(true);
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [showSearchForm, setShowSearchForm] = useState(false);
//   const [showDeleteForm, setShowDeleteForm] = useState(false);
//   const [showDeparture, setShowDeparture] = useState(false);
//   const [ViewDepartureDetails, setViewDepartureDetails] = useState(false);
//   const [ShowProfile, setShowProfile] = useState(false);
//   const [ShowSelecteDepartureForm,setShowSelecteDepartureForm] = useState(false);
//   const [showUserSearchForm , setShowUserSearchForm] = useState(false);
//   const [test, setTest]= useState(false);
//   const [DepartureTerminals, setDepartureTerminals] = useState(false);
//   const [ArrivalTerminals, setArrivalTerminals] = useState(false);
//   //const [Type, setFlightType]= useState(false);
// //   function handleUpdate() {
// //       setShowUpdateForm(true);
// //     }
// //     function handledelete(){
// //         setShowDeleteForm(true);
// //     }
// function sub1() {
   
//       //axios
//         // .post(`http://localhost:3000/api/v1/flights/findFlight`, body)
//         // .then((res) => {
//         //   setS(res.data)
//         //   console.log(res.data)
//         // })
//         // .catch((err) => console.log("error herererere"));
//   }
//  useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/v1/flights`)
//       .then((res) => {
//         console.log(res.data.data.flights);
//         setList(res.data.data.flights);
//       })
//       .catch((err) => console.log(err));
//   }, []);
  
//    return(
    
//     list.map((a) => {
//       return (
//         <div>
//           <label for="FlightNumber"> FlightNumber:</label>
//           <label>{a.FlightNumber}</label>

//           <label for="DepartureTime"> DepartureTime:</label>
//           <label>{a.DepartureTime}</label>

//           <label for="ArrivalTime"> ArrivalTime:</label>
//           <label>{a.ArrivalTime}</label>

//           <label for="DateOfFlight"> DateOfFlight:</label>
//           <label>{a.DateOfFlight}</label>

//           <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
//           <label>{a.NumberOfEconomySeats}</label>

//           <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
//           <label>{a.NumberOfBusinessSeats}</label>

//           <label for="NumberOfFirstClassSeats"> NumberOfFirstClassSeats:</label>
//           <label>{a.NumberOfFirstClassSeats}</label>

//           <label for="Airport"> Airport:</label>
//           <label>{a.Airport}</label>

//           <label for="DepartureTerminals"> DepartureTerminals:</label>
//           <label>{a.DepartureTerminals}</label>

//           <label for="ArrivalTerminals"> ArrivalTerminals:</label>
//           <label>{a.ArrivalTerminals}</label>

//           <label for="From"> From:</label>
//           <label>{a.From}</label>

//           <label for="To"> To:</label>
//           <label>{a.To}</label>

//           <label for="ArrivalDate"> ArrivalDate:</label>
//           <label>{a.ArrivalDate}</label>
         
//           <label for="DepartureDate"> Departure Date:</label>
//           <label>{a.DepartureDate}</label>

//           <label for="FlightType"> Flight Type:</label>
//           <label>{a.TypeOfFlight}</label>

//           <label for="DurationInHrs"> Duration:</label>
//           <label>{a.DurationInHrs}</label>

//           <label for="TotalTicketPrice"> Ticket Price:</label>
//           <label>{a.TotalTicketPrice}</label>

//           <label for="BaggageAllowance"> Baggage Allowance:</label>
//           <label>{a.BaggageAllowance}</label>

//           <label for="Cabin"> Cabin:</label>
//           <label>{a.Cabin}</label>

//           <label for="NumberOfPassengers"> NumberOfPassengers:</label>
//           <label>{a.NumberOfPassengers}</label>
//           <p>  <br></br></p>
          
//           <button onClick={sub2}>Show Available Seats  </button>
//           <button
//       onClick={() => {
//         if (window.confirm("Are you sure you wish to reserve this flight?")) {
//           sub();
//         }
//       }}
//     >
//       Reserve
//     </button>
          

//         </div>
//       );
//     }
//     ));
// }
// export default AddToWishlist;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import UpdateFlight from "./UpdateFlight";
import Delete from "./Delete";


const AddToWishList = () =>   {
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
  const[chosenFlight, setChosenFlight] = useState(null);
  const [seats, setSeats] = useState(0)
  function sub() {
     if(chosenFlight != null ){
       const body = {
         ChosenCabin: "Economy",
         NumberOfSeats: seats
       }
      axios
        .post(`http://localhost:3000/api/v1/reserve/hello@yahoo.com/1/${chosenFlight._id}/${chosenFlight.FlightNumber}`, body)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log("error herererere"));
  }}
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
        
        <div >
        <ul>
     <li><a href="/Profile">Profile</a></li>
     <li><a href="/SearchFlight">SearchFlight </a></li>
     <li><a href="/SearchReturnFlights">Search returning Flights </a></li>
   </ul> 
   <div>
     <ul class = "extra">
 <li><a href="/ViewReservedFlights">ViewReservedFlights</a></li>
     <li><a href="/Wishlist">View Summary </a></li>
     <li><a href="/ViewProfile">View your details </a></li>
   </ul>
   </div>

          <label for="FlightNumber"> FlightNumber:</label>
          <label>{a.FlightNumber}</label>
         
          <label for="DepartureTime"> DepartureTime:</label>
          <label>{a.DepartureTime}</label>

          <label for="ArrivalTime"> ArrivalTime:</label>
          <label>{a.ArrivalTime}</label>

          <label for="DateOfFlight"> DateOfFlight:</label>
          <label>{a.DateOfFlight}</label>
         

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
          <p><br></br></p>
          {(a.Cabin === "Economy") && (<>
          <label for="NumberOfEconomySeats"> Number Of Available Seats:</label>
          <label>{a.NumberOfEconomySeats}</label></>
          )}
          {(a.Cabin === "Business") && (<>
            <label for="NumberOfBusinessSeats"> Number Of Available Seats:</label>
          <label>{a.NumberOfBusinessSeats}</label></>
          )}
          {(a.Cabin === "First Class") && (<>
            <label for="NumberOfFirstClassSeats"> Number Of Available Seats:</label>
          <label>{a.NumberOfFirstClassSeats}</label></>
          )}
          <p><br></br></p>
          
          <label for="AvailableSeats">Enter number of seats to reserve:</label>
        <input
          type="number"
          id="seats"
        /><p><br></br></p>
        <button
      onClick={() => {
        if (window.confirm("Are you sure you wish to reserve this flight?")) {
          var selected = document.getElementById("seats")
          setSeats(selected.value)
          console.log(selected.value)
          setChosenFlight(a)
          sub();
        }
      }}
    >
      Reserve
    </button>
        </div>
      );
    }
    ));
}
export default AddToWishList;