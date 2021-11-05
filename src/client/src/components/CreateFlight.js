import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateFlight extends Component {

    constructor() {
        super();
        this.state = {
          FlightNumber: '',
          DepartureTime:'',
          ArrivalTime:'',
          DateOfFlight:'',
          NumberOfEconomySeats:'',
          NumberOfBusinessSeats:'',
          Airport:'',
          AirportTerminals:''
        };
      }
    
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const data = {
          FlightNumber: this.state.FlightNumber,
          DepartureTime: this.state.DepartureTime,
          ArrivalTime: this.state.ArrivalTime,
          DateOfFlight: this.state.DateOfFlight,
          NumberOfEconomySeats: this.state.NumberOfEconomySeats,
          NumberOfBusinessSeats: this.state.NumberOfBusinessSeats,
          Airport: this.state.Airport,
          AirportTerminals: this.state.AirportTerminals
        };
    
        axios
          .post('http://localhost:8000/add-flight', data)
          .then(res => {
            this.setState({
              FlightNumber: '',
              DepartureTime:'',
              ArrivalTime:'',
              DateOfFlight:'',
              NumberOfEconomySeats:'',
              NumberOfBusinessSeats:'',
              Airport:'',
              AirportTerminals:''
            })
            this.props.history.push('/');
          })
          .catch(err => {
            console.log("Error in Create Flight!");
          })
      };
    
    
    
      render() {
        return (
          <div className="CreateFlight">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <Link to="/" className="btn btn-outline-warning float-left">
                      Show Flight List
                  </Link>
                </div>
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Add Flight</h1>
                  <p className="lead text-center">
                      Create new Flight
                  </p>
    
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='FlightNumber'
                        name='FlightNumber'
                        className='form-control'
                        value={this.state.FlightNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <br />
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='DepartureTime'
                        name='DepartureTime'
                        className='form-control'
                        value={this.state.DepartureTime}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='String'
                        placeholder='ArrivalTime'
                        name='ArrivalTime'
                        className='form-control'
                        value={this.state.ArrivalTime}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='Date'
                        placeholder='DateOfFlight'
                        name='DateOfFlight'
                        className='form-control'
                        value={this.state.DateOfFlight}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='Number'
                        placeholder='NumberOfEconomySeats'
                        name='NumberOfEconomySeats'
                        className='form-control'
                        value={this.state.NumberOfEconomySeats}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='Number'
                        placeholder='NumberOfBusinessSeats'
                        name='NumberOfBusinessSeats'
                        className='form-control'
                        value={this.state.NumberOfBusinessSeats}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Airport'
                        name='Airport'
                        className='form-control'
                        value={this.state.PhoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='AirportTerminals'
                        name='AirportTerminals'
                        className='form-control'
                        value={this.state.AirportTerminals}
                        onChange={this.onChange}
                      />
                    </div>
    
    
    
                    <input
                        type="submit"
                        className="btn btn-outline-warning btn-block mt-4"
                    />
                  </form>
              </div>
              </div>
            </div>
          </div>
        );
      }
    }

export default CreateFlight;