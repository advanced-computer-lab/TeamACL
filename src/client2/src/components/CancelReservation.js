import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function CancelReservation({ id }) {
  const [U, setU] = useState(false);
  

  useEffect(() => {
    if (U) {
      console.log("from frontend");
      axios
        .delete(`http://localhost:3000/api/v1/flights/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button  onClick={() => {
        if (window.confirm("Are you sure you wish to cancel the reservation?")) {
          sub();
        }
      }} variant="contained">Cancel Reservation</Button>
    
    </Stack>
  );
}

export default CancelReservation;
//<button variant="contained"
  //    onClick={() => {
    //    if (window.confirm("Are you sure you wish to cancel the reservation?")) {
      //    sub();
        //}
   //   }}
    //>
      //Cancel Reservation
    //</button>