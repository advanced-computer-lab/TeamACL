import React from 'react';
import { Link } from 'react-router-dom';

import UserSearch from "./UserSearch";

function UserNav(){
return (
    <nav>
        <u1 className="nav-Links">
       
            <Link to="/Usersearch">
            <li>Search Flight</li>
            </Link>
            
            <Link to="/ViewProfile">
            <li>View Profile</li>
            </Link>

            <Link to="/EditProfile">
            <li>Edit Profile</li>
            </Link>

        </u1>
    </nav>
)
}
export default UserNav;