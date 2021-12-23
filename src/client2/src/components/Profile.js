import React from 'react'
import {useNavigate, Navigate, Link} from 'react-router-dom';
import AddToWishlist from "./AddToWishlist";
import ViewReservedFlights from "./ViewReservedFlights";
import ViewProfile from "./ViewProfile";

function Profile() {
    return (
        <div>
            <ul>
    <li><a href="/Profile">Profile</a></li>
    <li><a href="/SearchFlight">SearchFlight </a></li>
    <li><a href="/SearchReturnFlights">Search returning Flights </a></li>
  </ul>

  <div class= "extra">
             {/* <Link to="/ViewReservedFlights">
            <li>ViewReservedFlights</li>
            </Link>
            <Link to="/Wishlist">
            <li>View Summary</li>
            </Link>
            <Link to="/ViewProfile">
            <li>View your details</li>
            </Link>
            </div> */}

<ul class = "extra">
<li><a href="/ViewReservedFlights">ViewReservedFlights</a></li>
    <li><a href="/Wishlist">View Summary </a></li>
    <li><a href="/ViewProfile">View your details </a></li>
  </ul>





        </div>


</div>




    )
}

export default Profile
