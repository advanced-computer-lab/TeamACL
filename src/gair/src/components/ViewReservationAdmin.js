import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./ViewAllFlights.css";
import "./Header.css";

const ViewReservationAdmin = () => {
  const { userEmail } = useParams();
  if (userEmail === "undefined") {
    console.log(true);
    window.location.href = "/login";
  }
  const [list, setList] = useState([]);
  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }
  function handleCancele(id) {
    console.log(id);
    axios
      .delete(`http://localhost:3000/api/v1/reserve/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/reserve`)
      .then((res) => {
        console.log(res.data.data.reservation);
        setList(res.data.data.reservation);
      })
      .catch((err) => console.log(err));
  }, []);

  return list.map((props) => {
    const reservation_id = props._id;
    return (
      <div>
        {/* <h2>THIS IS THE RESERVED FLIGHTS FOR {userEmail}</h2> */}
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
        <div className="main-container">
          <div class="flights">
            <div class="flight">
              <h3>Reservation:</h3>
              <p class="data">
                <strong>Flight Number</strong>: {props.FlightNumber}
              </p>
              <p class="data">
                <strong>Chosen Cabin</strong>: {props.ChosenCabin}
              </p>
              <p class="data">
                <strong>SeatNumber</strong>: {props.SeatNumber}
              </p>

              <div class="button">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  onClick={() => {
                    console.log(reservation_id);
                    if (
                      window.confirm(
                        "Are you sure you wish cancele this reservation"
                      )
                    ) {
                      handleCancele(reservation_id);
                    }
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default ViewReservationAdmin;
