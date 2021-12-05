import React from 'react'

function Profile() {
    return (
        <div>
             <Link to="/ReserveFlight">
            <li>ViewReservedFlights</li>
            </Link>
            <Link to="/AddToWishlist">
            <li>View Summary</li>
            </Link>
            
        </div>
    )
}

export default Profile
