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
import Admin from "./components/Admin";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile"
//import { Router } from "express";


{/* <Routes>
<Route path='/view-departure-details' element={ViewDepartureDetails}/>
</Routes> */}


const { route, port } = require("./base");
const App = () =>  {

  return(

      <div>
        
          <Routes>
            <Route path = "/EditProfile" element= {<EditProfile/>}/>
          <Route path = "/UserProfile" element = {<UserProfile/>}/>
         <Route path = "/CreateFlight" element = {<CreateFlight/>} />
         <Route path = "/ViewAllFlights" element = {<ViewAllFlights/>} />
         <Route path = "/SearchFlight" element = {<SearchFlight/>} />
         <Route path = "/UserNav" element = {<UserNav/>} />
         <Route path = "/ViewDepartureDetails" element = {<ViewDepartureDetails/>} />
         <Route path = "/Admin" element = {<Admin/>} />
         <Route exact path = "/" element = {<Home/>} />
         </Routes>
         </div>
  );
  
  }
  export default App;
      
