import React from 'react'

function ViewDepartureDetails(props) {
    return (
        <div>
            <label for="Flight Number"> FlightNumber:</label>
              <label>{props.FlightNumber}</label> 

              <label for="DepartureTime"> DepartureTime:</label>
              <label>{props.DepartureTime}</label>

              <label for="ArrivalTime"> ArrivalTime:</label>
              <label>{props.ArrivalTime}</label>

              <label for="DateOfFlight"> DateOfFlight:</label>
              <label>{props.DateOfFlight}</label>

              <label for="NumberOfEconomySeats"> NumberOfEconomySeats:</label>
              <label>{props.NumberOfEconomySeats}</label>

              <label for="NumberOfBusinessSeats"> NumberOfBusinessSeats:</label>
              <label>{props.NumberOfBusinessSeats}</label>

              <label for="NumberOfFirstSeats"> NumberOfFirstSeats:</label>
              <label>{props.NumberOfFirstSeats}</label>

              <label for="Airport"> Airport:</label>
              <label>{props.Airport}</label>

              <label for="AirportTerminals"> AirportTerminals:</label>
              <label>{props.AirportTerminals}</label>

              <label for="From"> From:</label>
              <label>{props.From}</label>

              <label for="To"> To:</label>
              <label>{props.To}</label>
        </div>
    )
}
export default ViewDepartureDetails;
