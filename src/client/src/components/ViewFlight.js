
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';
class ViewFlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:8082/api/Flight')
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightList');
      })
  };


  render() {
    const flights = this.state.flights;
    console.log("Printflight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no book record!";
    } else {
      flightList = flights.map((flight, k) =>
        <FlightCard flight={flight} key={k} />
      );
    }


    return (
      <div className="ViewFlightList">
       

            <div className="col-md-11">
              <Link to="/add-Flight" className="btn btn-outline-warning float-right">
                + Add New flight
              </Link>
             
            </div>
            <div className="list">
                {flightList}
          </div>
      </div>
    );
  }
}

export default ViewFlightList;