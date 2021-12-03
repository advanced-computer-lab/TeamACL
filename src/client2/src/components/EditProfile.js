import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBornIn = this.onChangeBornIn.bind(this);
    this.onChangeLivesIn = this.onChangeLivesIn.bind(this);
    this.onChangeMartialStatus = this.onChangeMartialStatus.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeJob = this.onChangeJob.bind(this);
    this.onChangePassportNumber = this.onChangePassportNumber.bind(this);






    this.onSubmit = this.onSubmit.bind(this);

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

    
    }
  }

  componentDidMount() {
    axios.put('http://localhost:3000/EditProfile/')
      .then(response => {
        this.setState({
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Email: response.data.Email,
          Age: response.data.Age,
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



  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

 
  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
    })
  }
  
  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value
    })
  }
  
  onChangeAge(e) {
    this.setState({
      Age: e.target.value
    })
  }
  
  onChangeBornIn(e) {
    this.setState({
      BornIn: e.target.value
    })
  }
  
  onChangeLivesIn(e) {
    this.setState({
      LivesIn: e.target.value
    })
  }
  
  onChangeMartialStatus(e) {
    this.setState({
      MartialStatus: e.target.value
    })
  }
  
  onChangePhoneNumber(e) {
    this.setState({
      PhoneNumber: e.target.value
    })
  }
  

  
  onChangeJob(e) {
    this.setState({
      Job: e.target.value
    })
  }
  
  onChangePassportNumber(e) {
    this.setState({
      PassportNumber: e.target.value
    })
  }

  

  onSubmit(e) {
    e.preventDefault();

    const newuser = {
      username: this.state.username,
      
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Age: this.state.Age,
      BornIn: this.state.BornIn,
      LivesIn: this.state.LivesIn,
      MartialStatus: this.state.MartialStatus,
      PhoneNumber: this.state.PhoneNumber,
      Job: this.state.Job,
      PassportNumber:this.state.PassportNumber,
    }

    console.log(newuser);

    axios.put('http://localhost:5000/EditProfile/' + this.props.match.params.id, newuser)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Profile</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>FirstName: </label>
          <input ref="userInput"
                type="text"
              required
              className="form-control"
              value={this.state.FirstName}
              onChange={this.onChangeFirstName}/>
  
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>LastName: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.LastName}
              onChange={this.onChangeLastName}
              />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.Age}
              onChange={this.onChangeAge}
              />
        </div>
        <div className="form-group">
          <label>BornIn: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.BornIn}
              onChange={this.onChangeBornIn}
              />
        </div>
        <div className="form-group">
          <label>LivesIn: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.LivesIn}
              onChange={this.onChangeLivesIn}
              />
        </div>
        <div className="form-group">
          <label>MartialStatus: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.MartialStatus}
              onChange={this.onChangeMartialStatus}
              />
        </div>
        <div className="form-group">
          <label>PhoneNumber: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PhoneNumber}
              onChange={this.onChangePhoneNumber}
              />
        </div>
        <div className="form-group">
          <label>Job: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Job}
              onChange={this.onChangeJob}
              />
        </div>
        <div className="form-group">
          <label>PassportNumber: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PassportNumber}
              onChange={this.onChangePassportNumber}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}