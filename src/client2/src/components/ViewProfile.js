
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class ViewProfile extends Component {
  constructor(props) {
    super(props);



    this.state = {
      username: '',
      Email: '',
      Password: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/ViewProfile')
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
      
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

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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

  render() {
    return (
    <div>
      <h3>Edit Profile</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <text ref="userInput"
                type="text"
              required
              className="form-control"
              value={this.state.username}
              />
  
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <text  type="text"
              required
              className="form-control"
              value={this.state.Email}
             
              />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <text 
              type="text" 
              className="form-control"
              value={this.state.Password}
             
              />
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