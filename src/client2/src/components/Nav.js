import React from 'react';
import { Link } from 'react-router-dom';
import CreateFlight from "./CreateFlight";
import ViewAllFlights from "./ViewAllFlights";
import SearchFlight from "./SearchFlight";

function Nav(){
return (
    <nav>
        {/* <u1 className="nav-Links">
            <Link to="/CreateFlight">
            <li>CreateFlight</li>
            </Link>
            <Link to="/ViewAllFlights">
            <li>View Flight</li>
            </Link>
            <Link to="/UserSearch">
            <li>Admin Search</li>
            </Link>

        </u1> */}

        <ul>
  <li><a href="/CreateFlight">CreateFlight</a></li>
  <li><a href="/ViewAllFlights">View Flights</a></li>
  <li><a href="/UserSearch">Admin Search</a></li>
</ul>


    </nav>
)
}
export default Nav;