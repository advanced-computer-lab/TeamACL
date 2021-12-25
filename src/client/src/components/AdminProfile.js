import {useParams, Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
function AdminProfile() {
 
  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }
function Profile() {
  const FirstName = this.state.FirstName
    const LastName=  this.state.LastName;
    const Email=  this.state.Email;
    const Age=  this.state.Age;
    const BornIn=  this.state.BornIn;
    const LivesIn=  this.state.LivesIn;
    const MartialStatus=  this.state.MartialStatus;
    const PhoneNumber=  this.state.PhoneNumber;
    const Job=  this.state.Job;
    const PassportNumber=  this.state.PassportNumber;
  const { userEmail } = useParams();
  axios.get('http://localhost:3000/Profile/${userEmail}')
  .then(user => {
    this.setState({

      FirstName: user.data.FirstName,
      LastName: user.data.LastName,
      Email: user.data.Email,
      Age: user.data.Age,
      BornIn: user.data.BornIn,
      LivesIn: user.data.LivesIn,
      MartialStatus: user.data.MartialStatus,
      PhoneNumber: user.data.PhoneNumber,
      Job: user.data.Job,
      PassportNumber: user.data.PassportNumber,
    
  
    })   
  })
  .catch(function (error) {
    console.log(error);
  })

  
  
  


  
return(
    
      <div>
      <header>
        <nav className="main-nav">
          <div className="logo">
            <img src="./images/logo4.png" alt="" />
          </div>
          <ul className="el-list">
            <li className="el">
              <Link className="el" to={`/viewFlights/${userEmail}`}>
                Our Flights
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/reserved/${userEmail}`}>
                My Reservations
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/wishlist/${userEmail}`}>
                WishList
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/profile/${userEmail}`}>
                My Profile
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/search/${userEmail}`}>
                Search
              </Link>
            </li>
          </ul>
          <ul className="el-list2">
            <li className="el">
              <button type="submit" class="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
     
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
  <ul class = "formlook">

      <h3>My Profile</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>FirstName: {FirstName} </label>
        
  
        </div>

        <div className="form-group"> 
          <label>LastName:{LastName} </label>
       
  
        </div>
        <div className="form-group"> 
          <label>Age: {Age}</label>
   
        </div>

        <div className="form-group"> 
          <label>BornIn:{BornIn} </label>
       
  
        </div>
        <div className="form-group"> 
          <label>LivesIn:{LivesIn}</label>
 
  
        </div>
        <div className="form-group"> 
          <label>MartialStatus:{MartialStatus} </label>

  
        </div>
        <div className="form-group"> 
          <label>PhoneNumber:{PhoneNumber} </label>

  
        </div>
        <div className="form-group"> 
          <label>Job:{Job} </label>
 
  
        </div>
        <div className="form-group"> 
          <label>PassportNumber: {PassportNumber} </label>
         
  
        </div>
        <div className="form-group"> 
          <label>Email:{Email} </label>
        
        </div>

  

        <div className="form-group">
        <Link to="/EditProfile">
            <li>Edit</li>
            </Link>
        </div>
      </form>
    
    </ul>
    </div>
    </div>
    )
  }
}

export default AdminProfile;
