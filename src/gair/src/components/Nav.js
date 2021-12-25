import React from 'react';
import { Link } from 'react-router-dom';
import CreateFlight from "./CreateFlight";
import ViewAllFlights from "./ViewAllFlights";
import SearchFlight from "./SearchFlight";

function Nav(){
return (
    <nav>
        <u1 className="nav-Links">
            <Link to="/CreateFlight">
            <li>CreateFlight</li>
            </Link>
            <Link to="/ViewAllFlights">
            <li>View Flight</li>
            </Link>
            <Link to="/UserSearch">
            <li>Admin Search</li>
            </Link>

        </u1>
    </nav>
)
}
export default Nav;