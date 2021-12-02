import React from 'react';
import { Link } from 'react-router-dom';

import UserSearch from "./UserSearch";
import ViewReservedFlights from './ViewReservedFlights';


function UserNav(){
return (
    <nav>
        <u1 className="nav-Links">
       
            <Link to="/Usersearch">
            <li>Search Flight</li>
            </Link>
            <Link to="/ViewReservedFlights">
            <li>View Reserved Flights</li>
            </Link>
            

        </u1>
    </nav>
)
}
export default UserNav;