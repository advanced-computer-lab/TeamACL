import React from 'react';
import ViewFlight from './components/ViewFlight'
import CreateFlight from './components/CreateFlight';
import UpdateFlight from './components/UpdateFlight';
import Delete from './components/Delete';
import ViewReservedFlights from './components/ViewReservedFlights';

import { useState, useEffect } from 'react';
import axios from "axios";
// import UserCard from "../components/UserCard";
// import Grid from '@mui/material/Grid';

const {route,port} = require('./base')
export default function App() {
const [showCreateForm,setShowCreateForm] = useState(false);
const [showList,setShowList] = useState(false);
const [showUpdateForm,setShowUpdateForm] = useState(false); 
const [showviewForm,setShowviewForm] = useState(false);
const [showDeleteForm,setShowDeleteForm] = useState(false);
//const [list1,setList1] = useState([]);

const [list,setList] = useState([]);
//useEffect(()=>{},[]);
useEffect(()=>{
  axios.get(`${route}:${port}/api/v1/flights`)
    .then(res => {
      // console.log("frontend");
      // console.log(res.data.data.flights);
      setList(res.data.data.flights);
    }).catch(err => console.log(err))


},[]);

/*useEffect(()=>{
  axios.patch(`${route}:${port}/api/v1/flights`)
    .then(res => {
      console.log("frontend");
      console.log(res.data.data.flights);
      setList1(res.data.data.flights);
    }).catch(err => console.log(err))


},[]);
*/
function handleUpdate(){
//patch
setShowUpdateForm(true);
}
function handleView(){
  //patch
  setShowviewForm(true);
  }
    
return (
  <>
  <ViewFlight setShowCreateForm={setShowCreateForm} setShowList={setShowList} setShowUpdateForm={setShowUpdateForm} setShowDeleteForm={setShowDeleteForm} setShowviewForm={setShowviewForm} />
  {showCreateForm? <CreateFlight/>:<></>}
  {<button onClick={handleView}> ~vieww Flight </button>}
  {showviewForm? <ViewReservedFlights/>:<></>}
  
  {showList? list.map(a =>{return <div>
    
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

    <label for="NumberOfFirstSeats"> NumberOfFirstSeats:</label>
    <label>{a.NumberOfFirstSeats}</label>

    <label for="Airport"> Airport:</label>
    <label>{a.Airport}</label>

    <label for="AirportTerminals"> AirportTerminals:</label>
    <label>{a.AirportTerminals}</label>

    <label for="From"> From:</label>
    <label>{a.From}</label>

    <label for="To"> To:</label>
    <label>{a.To}</label>
    <p><br></br></p>
    
    
    <button onClick={handleUpdate} >Update </button>
    {showUpdateForm? <UpdateFlight id = {a._id}/>:<></>}
    {setShowDeleteForm? <Delete id = {a._id}/>:<></>}
    
    </div>}):<></>}
  </>
)

 

//export default App;
}