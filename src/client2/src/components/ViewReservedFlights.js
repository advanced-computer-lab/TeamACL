
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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CancelReservation from './CancelReservation';

const ViewReservedFlights = () =>  {
  const [showCancelForm, setShowCancelForm] = useState(false);  
  const [list,setList] = useState([]);
    useEffect(()=>{
  axios.get(`http://localhost:3000//api/v1/reserve`)
    .then(res => {
      // console.log("frontend");
      console.log(res.data.data.flights);
      setList(res.data.data.flights);
    }).catch(err => console.log(err))


},[]);

    
return (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>FlightNumber</TableCell>
          <TableCell align="right">DepartureTime</TableCell>
          <TableCell align="right">ArrivalTime</TableCell>
          <TableCell align="right">DateOfFlight</TableCell>
          <TableCell align="right">NumberOfEconomySeats</TableCell>
          <TableCell align="right">NumberOfBusinessSeats</TableCell>
          <TableCell align="right">NumberOfFirstSeats</TableCell>
          <TableCell align="right">Airport</TableCell>
          <TableCell align="right">AirportTerminals</TableCell>
          <TableCell align="right">From</TableCell>
          <TableCell align="right">To</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      
        {list.map((row) => (
          <TableRow
            key={row.FlightNumber}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.FlightNumber}
            </TableCell>
            
            <TableCell align="right">{row.DepartureTime}</TableCell>
            <TableCell align="right">{row.ArrivalTime}</TableCell>
            <TableCell align="right">{row.DateOfFlight}</TableCell>
            <TableCell align="right">{row.NumberOfEconomySeats}</TableCell>
            <TableCell align="right">{row.NumberOfBusinessSeats}</TableCell>
            <TableCell align="right">{row.NumberOfFirstSeats}</TableCell>
            <TableCell align="right">{row.Airport}</TableCell>
            <TableCell align="right">{row.AirportTerminals}</TableCell>
            <TableCell align="right">{row.From}</TableCell>
            <TableCell align="right">{row.To}</TableCell>
            <TableCell align="right">  <CancelReservation id={row._id} />
            </TableCell>
          </TableRow>
        ))
       
        }
      </TableBody>
    </Table>
  </TableContainer>
);
}
export default ViewReservedFlights
