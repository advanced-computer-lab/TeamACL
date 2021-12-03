import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const UserSelectFlight = () => {
  const [NumberOfSeats, setNumberOfSeats] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [TripDuration, setTripDuration] = useState();
  const [Cabin, setCabin] = useState();
  const [BaggageAllowance, setBaggageAllowance] = useState();
  const [flight, setFlight] = useState(null);
    const {Ifd }= useParams()
  console.log(Ifd)
  //use ifd to getFlight
  
  useEffect(() => {
    axios
    .get(`http://localhost:3000/api/v1/flights/findFlight`, {FlightNumber: Ifd})
    .then((res) => {
        setFlight(res.data[0])
      console.log(res.data)
    })
    .catch((err) => console.log("error herererere"));
  }, [])
  //flight number, departure and arrival times, trip duration, cabin class and baggage allowance.
  return (
    <div>
      <h3>Flight Details</h3>




      <h3> </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>NumberOfSeats: </label>
          <label for="NumberOfSeats">To:</label>
    <input type="text" id="NumberOfSeats" name="NumberOfSeats" 
     onChange={(event) => setNumberOfSeats(event.target.value)}/>
  
        </div>
        <div className="form-group"> 
          <label>cabintype: </label>
          <div ref="useInput"
            type="text"
            required
            className="form-control"
            value={this.state.NumberOfSeats}
            onchange={(event)=>setCabin(event.target.value)}
            >
<select>
<option value="BusinessSeat">BusinessSeat</option>
<option value="FirstSeat">FirstSeat</option>
<option value="EconomySeats">EconomySeats</option>
</select>
</div>
</div>
        
    <div className="form-group">
      <input type="submit" value="submit" className="btn btn-primary" />
    </div>
  </form>
</div>
)
}

export default UserSelectFlight;






















  
//   render() {
    
//         return (
//         <div>
//           <h3>Flight Details</h3>




//           <h3> </h3>
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group"> 
//               <label>NumberOfSeats: </label>
//               <input ref="userInput"
//                     type="text"
//                   required
//                   className="form-control"
//                   value={this.state.NumberOfSeats}
//                   onChange={setNumberOfSeats(event.target.value)}/>
      
//             </div>
//             <div className="form-group"> 
//               <label>cabintype: </label>
//               <div ref="useInput"
//                 type="text"
//                 required
//                 className="form-control"
//                 value={this.state.NumberOfSeats}
//                 onchange={setCabin(event.target.value)}
//                 >
//   <select>
//     <option value="BusinessSeat">BusinessSeat</option>
//     <option value="FirstSeat">FirstSeat</option>
//     <option value="EconomySeats">EconomySeats</option>
//   </select>
// </div>
// </div>
            
//         <div className="form-group">
//           <input type="submit" value="submit" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }