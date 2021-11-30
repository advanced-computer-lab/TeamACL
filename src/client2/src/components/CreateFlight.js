// import { useState } from "react";
// import axios from "axios";
// const CreateFlight = () => {
//   const [FlightType, setFlightType] = useState();
//   const [FlightNumber, setFlightNumber] = useState();
//   const [DepartureTime, setDepartureTime] = useState();
//   const [ArrivalTime, setArrivalTime] = useState();
//   const [DateOfFlight, setDateOfFlight] = useState();
//   const [NumberOfEconomySeats, setNumberOfEconomySeats] = useState();
//   const [NumberOfBusinessSeats, setNumberOfBusinessSeats] = useState();
//   const [NumberOfFirstSeats, setNumberOfFirstSeats] = useState();
//   const [Airport, setAirport] = useState();
//   const [AirportTerminals, setAirportTerminals] = useState();
//   const [From, setFrom] = useState();
//   const [To, setTo] = useState();
//    const [Price, setPrice] = useState();
//    const [BaggageAllowance, setBaggageAllowance] = useState();  
//    const [TripDuration, setTripDuration] = useState();  
//    const [Class, setClass] = useState();
//    const [NumberOfPassengers, setNumberOfPassengers] = useState();


//   console.log(FlightNumber);
//   const sub = function (e) {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/api/v1/flights", {
//         FlightType: FlightType,
//         FlightNumber: FlightNumber,
//         DepartureTime: DepartureTime,
//         ArrivalTime: ArrivalTime,
//         DateOfFlight: DateOfFlight,
//         NumberOfEconomySeats: NumberOfEconomySeats,
//         NumberOfBusinessSeats: NumberOfBusinessSeats,
//         NumberOfFirstSeats: NumberOfFirstSeats,
//         Airport: Airport,
//         AirportTerminals: AirportTerminals,
//         From: From,
//         To: To,
//         Price: Price,
//         BaggageAllowance: BaggageAllowance,
//         TripDuration: TripDuration,
//         Class: Class,
//         NumberOfPassengers: NumberOfPassengers,

//       })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <form>
//       <label for="FlightType">FlightType:</label>
//       <input
//         type="text"
//         id="FlightType"
//         name="FlightType"
//         onChange={(event) => setFlightType(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="FlightNumber">FlightNumber:</label>
//       <input
//         type="text"
//         id="FlightNumber"
//         name="FlightNumber"
//         onChange={(event) => setFlightNumber(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="DepartureTime">Departure:</label>
//       <input
//         type="text"
//         id="DepartureTime"
//         name="DepartureTime"
//         onChange={(event) => setDepartureTime(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="ArrivalTime">Arrival:</label>
//       <input
//         type="text"
//         id="ArrivalTime"
//         name="ArrivalTime"
//         onChange={(event) => setArrivalTime(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="DateOfFlight">Date:</label>
//       <input
//         type="text"
//         id="DateOfFlight"
//         name="DateOfFlight"
//         onChange={(event) => setDateOfFlight(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="NumberOfEconomySeats">NumberOfEconomySeats:</label>
//       <input
//         type="text"
//         id="NumberOfEconomySeats"
//         name="NumberOfEconomySeats"
//         onChange={(event) => setNumberOfEconomySeats(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="NumberOfBusinessSeats">NumberOfBusinessClassSeats:</label>
//       <input
//         type="text"
//         id="NumberOfBusinessSeats"
//         name="NumberOfBusinessSeats"
//         onChange={(event) => setNumberOfBusinessSeats(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="NumberOfFirstSeats">NumberOfFirstSeats:</label>
//       <input
//         type="text"
//         id="NumberOfFirstSeats"
//         name="NumberOfFirstSeats"
//         onChange={(event) => setNumberOfFirstSeats(event.target.value)}
//       />

//       <p>
//         <br></br>
//       </p>
//       <label for="Airport">Airport:</label>
//       <input
//         type="text"
//         id="Airport"
//         name="Airport"
//         onChange={(event) => setAirport(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="AirportTerminals">AirportTerminals:</label>
//       <input
//         type="text"
//         id="AirportTerminals"
//         name="AirportTerminals"
//         onChange={(event) => setAirportTerminals(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="From">From:</label>
//       <input
//         type="text"
//         id="From"
//         name="From"
//         onChange={(event) => setFrom(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="To">To:</label>
//       <input
//         type="text"
//         id="To"
//         name="To"
//         onChange={(event) => setTo(event.target.value)}
//       />
//       <p>
//         <br></br>
//       </p>
//       <label for="Price">Price:</label>
//       <input
//         type="text"
//         id="Price"
//         name="Price"
//         onChange={(event) => setPrice(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="BaggageAllowance">BaggageAllowance:</label>
//       <input
//         type="text"
//         id="BaggageAllowance"
//         name="BagageAllowance"
//         onChange={(event) => setBaggaeAllowance(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="TripDuration">TripDuration:</label>
//       <input
//         type="text"
//         id="TripDuration"
//         name="TripDuration"
//         onChange={(event) => setTripDuration(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="Class">Class:</label>
//       <input
//         type="text"
//         id="Class"
//         name="Class"
//         onChange={(event) => setClass(event.target.value)}
//       />
//       <p>        <br></br>     </p>
//       <label for="NumberOfPassengers">NumberOfPassengers:</label>
//       <input
//         type="text"
//         id="NumberOfPassengers"
//         name="NumberOfPassengers"
//         onChange={(event) => setNumberOfPassengers(event.target.value)}
//       />
//       <p>        <br></br>     </p>

//       <button type="Create Flight" value="Create Flight" onClick={sub}>
//         create flight{" "}
//       </button>
//     </form>
//   );
// };

// export default CreateFlight;
