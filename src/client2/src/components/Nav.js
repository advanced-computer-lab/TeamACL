import React from 'react';
import { Link } from 'react-router-dom';
import CreateFlight from "./CreateFlight";
import ViewAllFlights from "./ViewAllFlights";
import SearchFlight from "./SearchFlight";

function Nav(){
return (
    <nav>
        <u1 className="nav-Links">
        {/* <button onClick={ClickHandler}> ~ Add New Flight</button>
        <button onClick={ClickHandler2}>~ view all Flights</button>
        <button onClick={ClickHandler4}>~ view departure flights</button>
        <button onClick={ClickHandler5}>~ Profile</button> */}
            <Link to="/CreateFlight">
            <li>CreateFlight</li>
            </Link>
            <Link to="/ViewAllFlights">
            <li>View Flight</li>
            </Link>
            <Link to="/SearchFlight">
            <li>Search</li>
            </Link>

        </u1>
    </nav>
)
}
export default Nav;