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
    };
  }
 
};

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
      DepartureTime: this.state.DepartureTime,
            ArrivalTime: this.state.ArrivalTime,
            DateOfFlight: this.state.DateOfFlight,
            NumberOfEconomySeats: this.state.NumberOfEconomySeats,
            NumberOfBusinessSeats: this.state.NumberOfBusinessSeats,
            Airport: this.state.Airport,
            AirportTerminals:this.state.AirportTerminals
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
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={this.state.publisher}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}