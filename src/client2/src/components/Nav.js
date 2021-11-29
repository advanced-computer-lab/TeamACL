import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
return (
    <nav>
        <u1 className="nav-Links">
            <Link to="/CreateFlight">
            <li>CreateFlight</li>
            </Link>
            <Link to="/ViewFlight">
            <li>View Flight</li>
            </Link>

        </u1>
    </nav>
)
}
export default Nav;