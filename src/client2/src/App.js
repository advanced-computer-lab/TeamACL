import React from "react";
import ViewFlight from "./components/ViewFlight";
import CreateFlight from "./components/CreateFlight";
import UpdateFlight from "./components/UpdateFlight";
import Delete from "./components/Delete";
import SearchFlight from "./components/SearchFlight";
import ViewDepartureDetails from './components/ViewDepartureDetails';
import {Route,BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Nav from "./components/Nav";
import UserSearch from "./components/UserSearch";
//import { Router } from "express";


{/* <Routes>
<Route path='/view-departure-details' element={ViewDepartureDetails}/>
</Routes> */}


const { route, port } = require("./base");
export default function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const [ViewDepartureDetails, setViewDepartureDetails] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);
  const [list, setList] = useState([]);
  const [ShowSelecteDepartureForm,setShowSelecteDepartureForm] = useState(false);
  const [showUserSearchForm , setShowUserSearchForm] = useState(false);
  const [test, setTest]= useState(false);
  
  <Router>
        <div>
        <Nav />
        
         <Route path = "/CreateFlight" component = {CreateFlight} />
         <Route path = "/ViewFlight" component = {ViewFlight} />
         <Route path = "/SearchFlight" component = {SearchFlight} />
         <Route path = "/View-Departure_Details" component = {ViewDepartureDetails} />
         
         </div>
    </Router>


  useEffect(() => {
    axios
      .get(`${route}:${port}/api/v1/flights`)
      .then((res) => {
        // console.log("frontend");
        // console.log(res.data.data.flights);
        setList(res.data.data.flights);
      })
      .catch((err) => console.log(err));
  }, []);

  
  function handleUpdate() {
    setShowUpdateForm(true);
  }
  function handleSelectDeparture() {
    setShowSelecteDepartureForm(true);
  }
  function handleSearch() {
    setShowSearchForm(true);
  }
  function handleDeparture() {
    setShowDeparture(true);
  }
  function handleViewDepartureDetails(){
    setViewDepartureDetails(true);
  }
  function handleUserSearch(){
    setShowUserSearchForm(true);
  }
  return (
    
    <>
      <ViewFlight
        setShowCreateForm={setShowCreateForm}
        setShowList={setShowList}
        setShowUpdateForm={setShowUpdateForm}
        setShowDeleteForm={setShowDeleteForm}
        setShowSearchForm={setShowSearchForm}
        setShowUserSearchForm ={setShowUserSearchForm}
        setViewDepartureDetails={setViewDepartureDetails}
        setShowProfile={setShowProfile}
        setShowDeparture={setShowDeparture}
      />
      {showCreateForm ? <CreateFlight /> : <></>}
      {<button onClick={handleSearch}> Search Flight </button>}
      {<button onClick={handleUserSearch}> User Search Flight </button>}
      {showSearchForm ? <SearchFlight /> : <></>}
      {showUserSearchForm? <UserSearch /> : <></>}
      {showList ? (
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
              <p>
                <br></br>
              </p>

              <button onClick={handleUpdate}>Update </button>
              
              {showUpdateForm ? <UpdateFlight id={a._id} /> : <></>}
              {ViewDepartureDetails? <ViewDepartureDetails id={a._id} /> : <></>}
              {setShowDeleteForm ? <Delete id={a._id} /> : <></>}
              

            </div>
          );
        })
      ) : (
        <></>
      )}
      {showDeparture ? (
        list.map((a) => {
          const x = a.DepartureTime;
          if(x != null){
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
              <p>
                <br></br>
              </p>

            <div>
            <button onClick={handleViewDepartureDetails}>Choose Departure Flight </button>
             </div>

            </div>
          );
          }
        })
      ) : (
        <></>
      )}
     
      
     
    </>
  );

  //export default App;
      }
