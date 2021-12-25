import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import VirtualizedList from "../MUI/VirtualizedList";
import CheckboxList from "../MUI/CheckboxList";
import { useParams, Link } from "react-router-dom";
const WishListAdmin = () => {
  const { userEmail } = useParams();
  if (userEmail === "undefined") {
    console.log(true);
    window.location.href = "/login";
  }
  const [list, setList] = useState([]);

  const [chosenFlight, setChosenFlight] = useState();
  const [seats, setSeats] = useState();
  const [cabin, setCabin] = useState();
  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }
  function sub(id) {
    console.log(chosenFlight);

    console.log(chosenFlight);
    axios
      .delete(`http://localhost:3000/api/v1/WishList/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("error herererere"));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/WishList`)
      .then((res) => {
        console.log(res.data.data.WishList);
        setList(res.data.data.WishList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="logo">
            <img src="./images/logo4.png" alt="" />
          </div>
          <ul className="el-list">
            <li className="el">
              <Link className="el" to={`/viewFlights-Admin`}>
                Flights
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/reserved-Admin`}>
                Reservations
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/wishlist-Admin`}>
                WishLists
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/profile-Admin`}>
                My Profile
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/search-Admin`}>
                Search
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/create-Admin`}>
                Create Flight
              </Link>
            </li>
          </ul>
          <ul className="el-list2">
            <li className="el">
              <button type="submit" class="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {list.map((props) => {
        const id = props._id;
        return (
          <div className="main-container">
            <div class="flights">
              <div class="flight">
                <h3>Flight:</h3>
                <p class="data">
                  <strong>Flight Number</strong>: {props.FlightNumber}
                </p>
                <p class="data">
                  <strong>Departure Time</strong>: {props.DepartureTime}
                </p>
                <p class="data">
                  <strong>Arrival Time</strong>: {props.ArrivalTime}
                </p>
                <p class="data">
                  <strong>Departure Date</strong>: {props.DepartureDate}
                </p>
                <p class="data">
                  <strong>Arrival Date</strong>: {props.ArrivalDate}
                </p>
                <p class="data">
                  <strong>Duration In Hours</strong>: {props.DurationInHrs}
                </p>
                <p class="data">
                  <strong>Date of Flight</strong>: {props.DateOfFlight}
                </p>
                <p class="data">
                  <strong>Number Of Economy Seats</strong>:{" "}
                  {props.NumberOfEconomySeats}
                </p>
                <p class="data">
                  <strong>Number Of Business Seats</strong>:
                  {props.NumberOfBusinessSeats}
                </p>
                <p class="data">
                  <strong>NumberOf First Class Seats</strong>:
                  {props.NumberOfFirstClassSeats}
                </p>
                <p class="data">
                  <strong>Availiable Seats In Economy</strong>:
                  {props.AvailiableSeatsInEconomy}
                </p>
                <p class="data">
                  <strong>Available Seats In Business</strong>:
                  {props.AvailableSeatsInBusiness}
                </p>
                <p class="data">
                  <strong>Available Seats In First Class</strong>:
                  {props.AvailableSeatsInFirstClass}
                </p>
                <p class="data">
                  <strong>Reserved Seats In Economy</strong>:
                  {props.ReservedSeatsInEconomy}
                </p>
                <p class="data">
                  <strong>Reserved Seats In Business</strong>:
                  {props.ReservedSeatsInBusiness}
                </p>
                <p class="data">
                  <strong>Airport</strong>: {props.Airport}
                </p>
                <p class="data">
                  <strong>Departure Terminals</strong>:{" "}
                  {props.DepartureTerminals}
                </p>
                <p class="data">
                  <strong>Arrival Terminals</strong>: {props.ArrivalTerminals}
                </p>
                <p class="data">
                  <strong>From</strong>: {props.From}
                </p>
                <p class="data">
                  <strong>To</strong>: {props.To}
                </p>
                <p class="data">
                  <strong>Baggage Allowance</strong>: {props.BaggageAllowance}
                </p>
                <p class="data">
                  <strong>TotalTicketPrice</strong>: {props.TotalTicketPrice}
                </p>
                <p class="data">
                  <strong>Type of Flight</strong>: {props.TypeOfFlight}
                </p>

                <div class="button">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to reserve this flight?"
                        )
                      ) {
                        setChosenFlight(props);
                        sub(id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default WishListAdmin;
