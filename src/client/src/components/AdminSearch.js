import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextFieldSizes from "../MUI/TextFieldSizes";
import { useParams, Link } from "react-router-dom";
function AdminSearch() {
  const { userEmail } = useParams();
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [DateOfFlight, setDateOfFlight] = useState();
  const [NumberOfEconomySeats, setNumberOfEconomySeats] = useState();
  const [NumberOfBusinessSeats, setNumberOfBusinessSeats] = useState();
  const [NumberOfFirstSeats, setNumberOfFirstSeats] = useState();
  const [Airport, setAirport] = useState();
  const [AirportTerminals, setAirportTerminals] = useState();
  const [From, setFrom] = useState();
  const [To, setTo] = useState();
  const [Flag, setFlag] = useState();

  const [U, setU] = useState(false);
  const [list, setList] = useState([]);
  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }

  function sub() {
    const body = {};
    if (FlightNumber !== "") {
      body["FlightNumber"] = FlightNumber;
    }
    if (DepartureTime !== "") {
      body["DepartureTime"] = DepartureTime;
    }
    if (ArrivalTime !== "") {
      body["ArrivalTime"] = ArrivalTime;
    }
    if (DateOfFlight !== "") {
      body["DateOfFlight"] = DateOfFlight;
    }
    if (NumberOfEconomySeats !== "") {
      body["NumberOfEconomySeats"] = NumberOfEconomySeats;
    }
    if (NumberOfBusinessSeats !== "") {
      body["NumberOfBusinessSeats"] = NumberOfBusinessSeats;
    }
    if (NumberOfFirstSeats !== "") {
      body["NumberOfFirstSeats"] = NumberOfFirstSeats;
    }
    if (Airport !== "") {
      body["Airport"] = Airport;
    }
    if (AirportTerminals !== "") {
      body["AirportTerminals"] = AirportTerminals;
    }
    if (From !== "") {
      body["From"] = From;
    }
    if (To !== "") {
      body["To"] = To;
    }
    console.log("from frontend");
    console.log(body);

    axios
      .post(`http://localhost:3000/api/v1/flights/findFlight`, body)
      .then((res) => {
        setList(res.data.data.flight);
        console.log(res.data);
      })
      .catch((err) => console.log("error herererere"));
  }
  function handleWishList(data) {
    if (userEmail === "undefined") {
      console.log(true);
      window.location.href = "/login";
    } else {
      axios.post("http://localhost:3000/api/v1/WishList/addToWishList", {
        FlightNumber: data.FlightNumber,
        UserEmail: userEmail,
        DepartureTime: data.DepartureTime,
        ArrivalTime: data.ArrivalTime,
        DepartureDate: data.DepartureDate,
        ArrivalDate: data.ArrivalDate,
        DurationInHrs: data.DurationInHrs,
        DateOfFlight: data.DateOfFlight,
        AvailiableSeatsInEconomy: data.AvailiableSeatsInEconomy,
        AvailableSeatsInBusiness: data.AvailableSeatsInBusiness,
        AvailableSeatsInFirstClass: data.AvailableSeatsInFirstClass,
        Airport: data.Airport,
        DepartureTerminals: data.DepartureTerminals,
        ArrivalTerminals: data.ArrivalTerminals,
        From: data.From,
        To: data.To,
        TotalTicketPrice: data.TotalTicketPrice,
        BaggageAllowance: data.BaggageAllowance,
        TypeOfFlight: data.TypeOfFlight,
      });
    }
  }
  const [details, setDetails] = useState(null);
  //const navigate = useNavigate();
  function FuncFlag() {
    setFlag(true);
  }

  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="logo">
            <img src="./imagess/logo4.png" alt="" />
          </div>
          <ul className="el-list">
            <li className="el">
              <Link className="el" to={`/viewFlights-Admin`}>
                Flights
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/reserved-Admin`}>
                Reservations
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/wishlist-Admin`}>
                WishList
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/profile-Admin`}>
                Profile
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/search-Admin`}>
                Search
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/create-Admin`}>
                Create Flight
              </Link>
            </li>
          </ul>
          <ul className="el-list2">
            <li className="el">
              <button type="submit" class="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="inputs">
          <div class="row g-11">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Flight Number"
                aria-label="First name"
                onChange={(event) => setFlightNumber(event.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Departure Time"
                aria-label="Departure Time"
                onChange={(event) => setDepartureTime(event.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Arrival Time"
                aria-label="Arrival Time"
                onChange={(event) => setArrivalTime(event.target.value)}
              />
            </div>

            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Date Of Flight"
                aria-label="Date Of Flight"
                onChange={(event) => setDateOfFlight(event.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Airport"
                aria-label="Airport"
                onChange={(event) => setAirport(event.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="From"
                aria-label="From"
                onChange={(event) => setFrom(event.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="To"
                aria-label="To"
                onChange={(event) => setTo(event.target.value)}
              />
            </div>
            <div class="button">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={sub}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {list.map((props) => {
        const id = props._id;
        const data = { ...props };
        return (
          <div>
            <br></br>

            <div className="main-container">
              <div className="flights">
                <div className="flight">
                  <p className="data">
                    <strong>Flight Number</strong>: {props.FlightNumber}
                  </p>
                  <p className="data">
                    <strong>Departure Time</strong>: {props.DepartureTime}
                  </p>
                  <p className="data">
                    <strong>Arrival Time</strong>: {props.ArrivalTime}
                  </p>
                  <p className="data">
                    <strong>Departure Date</strong>: {props.DepartureDate}
                  </p>
                  <p className="data">
                    <strong>Arrival Date</strong>: {props.ArrivalDate}
                  </p>
                  <p className="data">
                    <strong>Duration In Hours</strong>: {props.DurationInHrs}
                  </p>
                  <p className="data">
                    <strong>Date of Flight</strong>: {props.DateOfFlight}
                  </p>
                  <p className="data">
                    <strong>Number Of Economy Seats</strong>:{" "}
                    {props.NumberOfEconomySeats}
                  </p>
                  <p className="data">
                    <strong>Number Of Business Seats</strong>:
                    {props.NumberOfBusinessSeats}
                  </p>
                  <p className="data">
                    <strong>NumberOf First Class Seats</strong>:
                    {props.NumberOfFirstClassSeats}
                  </p>
                  <p className="data">
                    <strong>Availiable Seats In Economy</strong>:
                    {props.AvailiableSeatsInEconomy}
                  </p>
                  <p className="data">
                    <strong>Available Seats In Business</strong>:
                    {props.AvailableSeatsInBusiness}
                  </p>
                  <p className="data">
                    <strong>Available Seats In First Class</strong>:
                    {props.AvailableSeatsInFirstClass}
                  </p>
                  <p className="data">
                    <strong>Reserved Seats In Economy</strong>:
                    {props.ReservedSeatsInEconomy}
                  </p>
                  <p className="data">
                    <strong>Reserved Seats In Business</strong>:
                    {props.ReservedSeatsInBusiness}
                  </p>
                  <p className="data">
                    <strong>Airport</strong>: {props.Airport}
                  </p>
                  <p className="data">
                    <strong>Departure Terminals</strong>:{" "}
                    {props.DepartureTerminals}
                  </p>
                  <p className="data">
                    <strong>Arrival Terminals</strong>: {props.ArrivalTerminals}
                  </p>
                  <p className="data">
                    <strong>From</strong>: {props.From}
                  </p>
                  <p className="data">
                    <strong>To</strong>: {props.To}
                  </p>
                  <p className="data">
                    <strong>Baggage Allowance</strong>: {props.BaggageAllowance}
                  </p>
                  <p className="data">
                    <strong>TotalTicketPrice</strong>: {props.TotalTicketPrice}
                  </p>
                  <p className="data">
                    <strong>Type of Flight</strong>: {props.TypeOfFlight}
                  </p>
                  <div className="button">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        handleWishList(data);
                      }}
                    >
                      Add To wishList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminSearch;
