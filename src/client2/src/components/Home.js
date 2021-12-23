import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home(){
return (
    // <nav>
    //     <uH className="nav-Links">
    //         <Link to="/Admin">
    //         <li>Admin</li>
    //         </Link>
    //         <Link to="/UserNav">
    //         <li>User</li>
    //         </Link>

    //     </uH>
    // </nav>

    <ul>
    <li><a href="/UserNav">User</a></li>
    <li><a href="/Admin">Admin </a></li>
  </ul>
  

    )





}
export default Home;