import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
return (
    <nav>
        <u1 className="nav-Links">
            <Link to="/Admin">
            <li>Admin</li>
            </Link>
            <Link to="/UserNav">
            <li>Existing User</li>
            </Link>
            <Link to="/GuestUser">
            <li>Guest User</li>
            </Link>

        </u1>
    </nav>
)
}
export default Home;