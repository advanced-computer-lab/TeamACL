
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
    axios.get('http://localhost:3000/api/User')
      .then(response => {
        this.setState({
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Email: response.data.Email,
          Age: response.data.Age,
          username: response.data.username,
          BornIn: response.data.BornIn,
          LivesIn: response.data.LivesIn,
          MartialStatus: response.data.MartialStatus,
          PhoneNumber: response.data.PhoneNumber,
          Job: response.data.Job,
          PassportNumber: response.data.PassportNumber,
        
      
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
      

    }

  
  render() {
    const user= this.setState.user
    return (
    <div>
      <h3>Edit Profile</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>FirstName: {user.FirstName} </label>
        
  
        </div>

        <div className="form-group"> 
          <label>LastName:{user.LastName} </label>
       
  
        </div>
        <div className="form-group"> 
          <label>Age: {user.Age}</label>
   
        </div>

        <div className="form-group"> 
          <label>BornIn:{user.BornIn} </label>
       
  
        </div>
        <div className="form-group"> 
          <label>LivesIn:{user.LivesIn}</label>
 
  
        </div>
        <div className="form-group"> 
          <label>MartialStatus:{user.MartialStatus} </label>

  
        </div>
        <div className="form-group"> 
          <label>PhoneNumber:{user.PhoneNumber} </label>

  
        </div>
        <div className="form-group"> 
          <label>Job:{user.Job} </label>
 
  
        </div>
        <div className="form-group"> 
          <label>PassportNumber: {user.PassportNumber} </label>
         
  
        </div>
        <div className="form-group"> 
          <label>Email:{user.Email} </label>
        
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