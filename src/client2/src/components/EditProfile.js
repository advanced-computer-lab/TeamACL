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

  

  onSubmit(e) {
    e.preventDefault();

    const newuser = {
      username: this.state.username,
      Email: this.state.Email,
      Password: this.state.Password,
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
          <label>Username: </label>
          <input ref="userInput"
                type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}/>
  
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
          <label>Password: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Password}
              onChange={this.onChangePassword}
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