import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const  flight  = props.flight;

    return(
        <div className="card-container">
            <img src="https://media.istockphoto.com/vectors/flight-icon-vector-symbol-plane-icon-isolated-on-white-bacckground-vector-id1205780466?k=20&m=1205780466&s=170667a&w=0&h=bI1vXJmBsZWVdIpLEvA6jI7QBfS4ZrKqsysa02skq_Y=" alt="" />
            <div className="desc">
                <h2>    
                    <Link to={`/show-Flight/${flight.DateOfFlight}`}>
                        { flight.title }
                    </Link>
                </h2>
                <h3>{flight.Airport}</h3>
                <p>{flight.AirportTerminals}</p>
            </div>
        </div>
    )
};

export default FlightCard;