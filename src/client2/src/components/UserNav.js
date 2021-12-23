import React from 'react';
import { Link } from 'react-router-dom';

import UserSearch from "./UserSearch";

function UserNav(){
return (
    // <nav>
    //     <u1 className="nav-Links">
    //     <Link to="/Profile">
    //         <li>Profile</li>
    //         </Link>
    //         <Link to="/SearchFlight">
    //         <li>Search Leaving Flights</li>
    //         </Link>
    //         <Link to="/SearchReturnFlights">
    //         <li>Search returning Flights</li>
    //         </Link>
            

    //     </u1>
    // </nav>
  
    <ul>
    <li><a href="/Profile">Profile</a></li>
    <li><a href="/SearchFlight">SearchFlight </a></li>
    <li><a href="/SearchReturnFlights">Search returning Flights </a></li>
  </ul>
  
)
}
export default UserNav;