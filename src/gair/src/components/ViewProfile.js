import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";




export default class ViewProfile extends Component {
  constructor(props) {
    super(props);



    this.state = {
      FirstName: '',
      Email: '',
      Password: '',
      LastName:'',
      Age:0,
      BornIn:'',
      LivesIn:'',
      MartialStatus:'',
      PhoneNumber:'',
      Job:'', 
      PassportNumber:'',

    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:3000/ViewProfile')
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
      

    }

  
  render() {
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
    return (
    <div>
      <h3>Edit Profile</h3>
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
    </div>
    )
  }
}