import React from 'react'
import {useNavigate, Navigate, Link} from 'react-router-dom';
import AddToWishlist from "./AddToWishlist";
import ViewReservedFlights from "./ViewReservedFlights";

function Profile() {
    return (
        <div>
             <Link to="/ViewReservedFlights">
            <li>ViewReservedFlights</li>
            </Link>
            <Link to="/Wishlist">
            <li>View Summary</li>
            </Link>
            
        </div>
    )
}

export default Profile
