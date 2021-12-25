import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function AdminHome() {
  const { userEmail } = useParams();
  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }
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
    </div>
  );
}

export default AdminHome;
