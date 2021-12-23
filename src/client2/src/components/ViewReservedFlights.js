import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CancelReservation from './CancelReservation';

const ViewReservedFlights = () =>  {
  const [showCancelForm, setShowCancelForm] = useState(false);  
  const [list,setList] = useState([]);
    useEffect(()=>{
  axios.get(`http://localhost:3000//api/v1/reserve`)
    .then(res => {
      // console.log("frontend");
      console.log(res.data.data.reservation);
      setList(res.data.data.reservation);
    }).catch(err => console.log(err))


},[]);

    
return (
 
  <div>
          <ul>
    <li><a href="/Profile">Profile</a></li>
    <li><a href="/SearchFlight">SearchFlight </a></li>
    <li><a href="/SearchReturnFlights">Search returning Flights </a></li>
  </ul>
    <div>
      <ul class = "extra">
  <li><a href="/ViewReservedFlights">ViewReservedFlights</a></li>
      <li><a href="/Wishlist">View Summary </a></li>
      <li><a href="/ViewProfile">View your details </a></li>
    </ul>
    </div>





  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>UserEmail</TableCell>
          <TableCell align="right">UserId</TableCell>
          <TableCell align="right">FlightId</TableCell>
          <TableCell align="right">FlightNumber</TableCell>
          <TableCell align="right">ChosenCabin</TableCell>
          <TableCell align="right">NumberOfSeats</TableCell>
      
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      
        {list.map((row) => (
          <TableRow
            key={row.UserId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.UserEmail}
            </TableCell>
            
            <TableCell align="right">{row.UserId}</TableCell>
            <TableCell align="right">{row.FlightId}</TableCell>
            <TableCell align="right">{row.FlightNumber}</TableCell>
            <TableCell align="right">{row.ChosenCabin}</TableCell>
            <TableCell align="right">{row.NumberOfSeats}</TableCell>
            <TableCell align="right">  <CancelReservation id={row._id} />
            </TableCell>
          </TableRow>
        ))
       
        }
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);
}
export default ViewReservedFlights