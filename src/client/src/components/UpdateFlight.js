import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        FlightNumber: '',
        DepartureTime: '',
        ArrivalTime: '',
        DateOfFlight: '',
        NumberOfEconomySeats: '',
        NumberOfBusinessSeats: '',
        Airport: '',
        AirportTerminals: '',
        From: '',
        To:'',
        FlightDate:'',
        Cabin:'',
        SeatsAvailableOnFlight:'',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/view-flights/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
            FlightNumber: res.data.FlightNumber,
            DepartureTime: res.data.DepartureTime,
            ArrivalTime: res.data.ArrivalTime,
            DateOfFlight: res.data.DateOfFlight,
            NumberOfEconomySeats: res.data.NumberOfEconomySeats,
            NumberOfBusinessSeats: res.data.NumberOfBusinessSeats,
            Airport: res.data.Airport,
            AirportTerminals: res.data.AirportTerminals,
            From: res.data.From,
            To: res.data.To,
            FlightDate: res.data.FlightDate,
            Cabin: res.data.Cabin,
            seatsAvailableOnFlight: res.data.eatsAvailableOnFlight,
        })
      })
      .catch(err => {
        console.log("Error from UpdateFlightInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      FlightNumber: this.state.FlightNumber,
      Departure: this.state.Departure,
            Arrival: this.state.Arrival,
            Date: this.state.Date,
            NumberOfEconomySeats: this.state.NumberOfEconomySeats,
            NumberOfBusinessClassSeats: this.state.NumberOfBusinessClassSeats,
            Airport: this.state.Airport,
            AirportTerminals:this.state.AirportTerminals,
            From: this.state.From,
            To: this.state.To,
            FlightDate: this.state.FlightDate,
            Cabin: this.state.Cabin,
            SeatsAvailableOnFlight: this.state.SeatsAvailableOnFlight
    };

    axios
      .put('http://localhost:8000/view-flights/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/view-flights/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateFlightInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="flightNumber">FlightNumber</label>
              <input
                type='text'
                placeholder='FlightNumber'
                name='flightNumber'
                className='form-control'
                value={this.state.flightNumber}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="departure">Departure</label>
              <input
                type='text'
                placeholder='Departure'
                name='departure'
                className='form-control'
                value={this.state.departure}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="arrival">Arrival</label>
              <input
                type='text'
                placeholder='Arrival'
                name='arrival'
                className='form-control'
                value={this.state.arrival}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="date">Date</label>
              <input
                type='text'
                placeholder='Date'
                name='date'
                className='form-control'
                value={this.state.date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="numberOfEconomySeats">NumberOfEconomySeats</label>
              <input
                type='text'
                placeholder='NumberOfEconomySeats'
                name='numberOfEconomySeats'
                className='form-control'
                value={this.state.numberOfEconomySeats}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="numberOfBusinessClassSeats">numberOfBusinessClassSeats</label>
              <input
                type='text'
                placeholder='NumberOfBusinessClassSeats'
                name='numberOfBusinessClassSeats'
                className='form-control'
                value={this.state.numberOfBusinessClassSeats}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="Airport">airport</label>
              <input
                type='text'
                placeholder='Airport'
                name='airport'
                className='form-control'
                value={this.state.airport}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="AirportTerminals">airportTerminals</label>
              <input
                type='text'
                placeholder='AirportTerminals'
                name='airportTerminals'
                className='form-control'
                value={this.state.airportTerminals}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="From">from</label>
              <input
                type='text'
                placeholder='From'
                name='from'
                className='form-control'
                value={this.state.from}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="To">to</label>
              <input
                type='text'
                placeholder='To'
                name='to'
                className='form-control'
                value={this.state.to}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="FlightDate">flightDate</label>
              <input
                type='text'
                placeholder='FlightDate'
                name='flightDate'
                className='form-control'
                value={this.state.flightDate}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="Cabin">cabin</label>
              <input
                type='text'
                placeholder='Cabin'
                name='cabin'
                className='form-control'
                value={this.state.cabin}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="SeatsAvailableOnFlight">seatsAvailableOnFlight</label>
              <input
                type='text'
                placeholder='SeatsAvailableOnFlight'
                name='seatsAvailableOnFlight'
                className='form-control'
                value={this.state.seatsAvailableOnFlight}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}