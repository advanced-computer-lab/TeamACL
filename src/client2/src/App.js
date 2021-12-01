import React,{Component} from "react";
import ViewAllFlights from "./components/ViewAllFlights";
import CreateFlight from "./components/CreateFlight";
import UpdateFlight from "./components/UpdateFlight";
import Delete from "./components/Delete";
import SearchFlight from "./components/SearchFlight";
import home from "./components/Home";
import ViewDepartureDetails from './components/ViewDepartureDetails';
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Nav from "./components/Nav";
import UserNav from "./components/UserNav";
import UserSearch from "./components/UserSearch";
import Home from "./components/Home";
import MoreDetailsDep from "./components/MoreDetailsDep";
import Admin from "./components/Admin";
//import { Router } from "express";


{/* <Routes>
<Route path='/view-departure-details' element={ViewDepartureDetails}/>
</Routes> */}


const { route, port } = require("./base");
const App = () =>  {
  //const [showCreateForm, setShowCreateForm] = useState(false);
 /* const [showList, setShowList] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const [ViewDepartureDetails, setViewDepartureDetails] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);
  const [list, setList] = useState([]);
  const [ShowSelecteDepartureForm,setShowSelecteDepartureForm] = useState(false);
  const [showUserSearchForm , setShowUserSearchForm] = useState(false);
  const [test, setTest]= useState(false);*/
  //render(){
  return(

      <div>
        
          <Routes>
         <Route path = "/CreateFlight" element = {<CreateFlight/>} />
         <Route path = "/ViewAllFlights" element = {<ViewAllFlights/>} />
         <Route path = "/SearchFlight" element = {<SearchFlight/>} />
         <Route path = "/UserNav" element = {<UserNav/>} />
         <Route path = "/ViewDepartureDetails" element = {<ViewDepartureDetails/>} />
         <Route path = "/Admin" element = {<Admin/>} />
         <Route path = "/UserSearch" element = {<UserSearch/>} />
         <Route path = "/MoreDetailsDep" element = {<MoreDetailsDep/>} />
         <Route exact path = "/" element = {<Home/>} />
         </Routes>
         </div>
  );
  //}

  // useEffect(() => {
  //   axios
  //     .get(`${route}:${port}/api/v1/flights`)
  //     .then((res) => {
  //       // console.log("frontend");
  //       // console.log(res.data.data.flights);
  //       setList(res.data.data.flights);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  
  // function handleUpdate() {
  //   setShowUpdateForm(true);
  // }
  // function handleSelectDeparture() {
  //   setShowSelecteDepartureForm(true);
  // }
  // function handleSearch() {
  //   setShowSearchForm(true);
  // }
  // function handleDeparture() {
  //   setShowDeparture(true);
  // }
  // function handleViewDepartureDetails(){
  //   setViewDepartureDetails(true);
  // }
  // function handleUserSearch(){
  //   setShowUserSearchForm(true);
  // }
  // return (
    
  //   <>
  //     <ViewFlight
  //      // setShowCreateForm={setShowCreateForm}
  //       setShowList={setShowList}
  //       setShowUpdateForm={setShowUpdateForm}
  //       setShowDeleteForm={setShowDeleteForm}
  //       setShowSearchForm={setShowSearchForm}
  //       setShowUserSearchForm ={setShowUserSearchForm}
  //       setViewDepartureDetails={setViewDepartureDetails}
  //       setShowProfile={setShowProfile}
  //       setShowDeparture={setShowDeparture}
  //     />
  //     {/* {showCreateForm ? <CreateFlight /> : <></>} */}
  //     {<button onClick={handleSearch}> Search Flight </button>}
  //     {<button onClick={handleUserSearch}> User Search Flight </button>}
  //     {showSearchForm ? <SearchFlight /> : <></>}
  //     {showUserSearchForm? <UserSearch /> : <></>}
  //     {showList ? (
  //       list.map((a) => {
  //         return (
  //           <div>
  //             <label for="FlightNumber"> FlightNumber:</label>
  //             <label>{a.FlightNumber}</label>

  //             <label for="DepartureTime"> DepartureTime:</label>
  //             <label>{a.DepartureTime}</label>

  //             <label for="ArrivalTime"> ArrivalTime:</label>
  //             <label>{a.ArrivalTime}</label>

  //             <label for="DateOfFlight"> DateOfFlight:</label>
  //             <label>{a.DateOfFlight}</label>

  //             <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
  //             <label>{a.NumberOfEconomySeats}</label>

  //             <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
  //             <label>{a.NumberOfBusinessSeats}</label>

  //             <label for="NumberOfFirstSeats"> NumberOfFirstSeats:</label>
  //             <label>{a.NumberOfFirstSeats}</label>

  //             <label for="Airport"> Airport:</label>
  //             <label>{a.Airport}</label>

  //             <label for="AirportTerminals"> AirportTerminals:</label>
  //             <label>{a.AirportTerminals}</label>

  //             <label for="From"> From:</label>
  //             <label>{a.From}</label>

  //             <label for="To"> To:</label>
  //             <label>{a.To}</label>
  //             <p>
  //               <br></br>
  //             </p>

  //             <button onClick={handleUpdate}>Update </button>
              
  //             {showUpdateForm ? <UpdateFlight id={a._id} /> : <></>}
  //             {ViewDepartureDetails? <ViewDepartureDetails id={a._id} /> : <></>}
  //             {setShowDeleteForm ? <Delete id={a._id} /> : <></>}
              

  //           </div>
  //         );
  //       })
  //     ) : (
  //       <></>
  //     )}
  //     {showDeparture ? (
  //       list.map((a) => {
  //         const x = a.DepartureTime;
  //         if(x != null){
  //         return (
  //           <div>
  //             <label for="FlightNumber"> FlightNumber:</label>
  //             <label>{a.FlightNumber}</label>

  //             <label for="DepartureTime"> DepartureTime:</label>
  //             <label>{a.DepartureTime}</label>

  //             <label for="ArrivalTime"> ArrivalTime:</label>
  //             <label>{a.ArrivalTime}</label>

  //             <label for="DateOfFlight"> DateOfFlight:</label>
  //             <label>{a.DateOfFlight}</label>

  //             <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
  //             <label>{a.NumberOfEconomySeats}</label>

  //             <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
  //             <label>{a.NumberOfBusinessSeats}</label>

  //             <label for="NumberOfFirstSeats"> NumberOfFirstSeats:</label>
  //             <label>{a.NumberOfFirstSeats}</label>

  //             <label for="Airport"> Airport:</label>
  //             <label>{a.Airport}</label>

  //             <label for="AirportTerminals"> AirportTerminals:</label>
  //             <label>{a.AirportTerminals}</label>

  //             <label for="From"> From:</label>
  //             <label>{a.From}</label>

  //             <label for="To"> To:</label>
  //             <label>{a.To}</label>
  //             <p>
  //               <br></br>
  //             </p>

  //           <div>
  //           <button onClick={handleViewDepartureDetails}>Choose Departure Flight </button>
  //            </div>

  //           </div>
  //         );
  //         }
  //       })
  //     ) : (
  //       <></>
  //     )}
     
      
     
  //   </>
  // );
  }
  export default App;
      
