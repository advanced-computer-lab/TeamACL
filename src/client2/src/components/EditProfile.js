import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      Email: '',
      Password: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/EditProfile/')
      .then(response => {
        this.setState({
          username: response.data.username,
          Email: response.data.Email,
          Password: response.data.Password,
    
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:3000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }



  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    })
  }
  onChangeFirstName(e){
    this.setState({
      FirstName:e.target.value
    })
  }
  onChangeLastName(e){
    this.setState({
      LastName:e.target.value
    })
  }
    onChangeAge(e){
      this.setState({
        Age:e.target.value
      })
  }
    onchangeBornIn(e){
      this.setState({
        BornIn:e.target.value
      })
    }
    onchangeLivesIn(e){
      this.setState({
        LivesIn:e.target.value
      })
    }
   onchangeMartialStatus(e){
      this.setState({
        MartialStatus:e.target.value
      })
    }
    onchangePhoneNumber(e){
      this.setState({
        PhoneNumber:e.target.value
      })
    }
    onchangeJob(e){
      this.setState({
        Job:e.target.value
      })
    }
    onchangePassportNumber(e){
      this.setState({
        PassportNumber:e.target.value
      })
    }


  onSubmit(e) {
    e.preventDefault();

    const newuser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Age:this.state.Age,
      BornIn:this.state.BornIn,
      LivesIn:this.state.LivesIn,
      PhoneNumber:this.state.PhoneNumber,
      Job:this.state.Job,
      PassportNumber:this.state.PhoneNumber,
      Email: this.state.Email,
      
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
              value={this.state.username}
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
          <label>FirstName: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.FirstName}
              onChange={this.onChangeFirstName}
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
              type="text" 
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
              onChange={this.onchangeBornIn}
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
              onChange={this.onchangeMartialStatus}
              />
        </div>
        <div className="form-group">
          <label>PhoneNumber: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PhoneNumber}
              onChange={this.onchangePhoneNumber}
              />
        </div>
        <div className="form-group">
          <label>Job: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Job}
              onChange={this.onchangeJob}
              />
        </div>
        
        <div className="form-group">
          <label>PassportNumber: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PassportNumber}
              onChange={this.onchangePassportNumber}
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