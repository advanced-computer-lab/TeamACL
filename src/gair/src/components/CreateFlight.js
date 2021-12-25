import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CreateFlight = () => {
  const { userEmail } = useParams();
  //variable taht will be sent in the params to the backend

  //useEffect => return the attribute of the component when clicked
  //axios => connects the frontend to the backend
  //useState => keeps track of the changing attributes
  const [FlightNumber, setFlightNumber] = useState();
  const [DepartureTime, setDepartureTime] = useState();
  const [ArrivalTime, setArrivalTime] = useState();
  const [DepartureDate, setDepartureDate] = useState();
  const [ArrivalDate, setArrivalDate] = useState();
  const [DurationInHrs, setDurationInHrs] = useState();
  const [DateOfFlight, setDateOfFlight] = useState();
  const [NumberOfEconomySeats, setNumberOfEconomySeats] = useState();
  const [NumberOfBusinessSeats, setNumberOfBusinessSeats] = useState();
  const [NumberOfFirstClassSeats, setNumberOfFirstClassSeats] = useState();
  const [AvailiableSeatsInEconomy, setAvailiableSeatsInEconomy] = useState();
  const [AvailableSeatsInBusiness, setAvailableSeatsInBusiness] = useState();
  const [AvailableSeatsInFirstClass, setAvailableSeatsInFirstClass] =
    useState();
  const [ReservedSeatsInEconomy, setReservedSeatsInEconomy] = useState();
  const [ReservedSeatsInBusiness, setReservedSeatsInBusiness] = useState();
  const [ReservedSeatsInFirstClass, setReservedSeatsInFirstClass] = useState();
  const [Airport, setAirport] = useState();
  const [DepartureTerminals, setDepartureTerminals] = useState();
  const [ArrivalTerminals, setArrivalTerminals] = useState();
  const [From, setFrom] = useState();
  const [To, setTo] = useState();
  const [TotalTicketPrice, setTotalTicketPrice] = useState();
  const [BaggageAllowance, setBaggageAllowance] = useState();
  const [TypeOfFlight, setTypeOfFlight] = useState();

  function logout() {
    axios.post("http://localhost:3000/api/v1/users/logout").then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }

  console.log(FlightNumber);
  const sub = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/flights", {
        FlightNumber: FlightNumber,
        DepartureTime: DepartureTime,
        ArrivalTime: ArrivalTime,
        DepartureDate: DepartureDate,
        ArrivalDate: ArrivalDate,
        DurationInHrs: DurationInHrs,
        DateOfFlight: DateOfFlight,
        NumberOfEconomySeats: NumberOfEconomySeats,
        NumberOfBusinessSeats: NumberOfBusinessSeats,
        NumberOfFirstClassSeats: NumberOfFirstClassSeats,
        AvailiableSeatsInEconomy: AvailiableSeatsInEconomy,
        AvailableSeatsInBusiness: AvailableSeatsInBusiness,
        AvailableSeatsInFirstClass: AvailableSeatsInFirstClass,
        ReservedSeatsInEconomy: ReservedSeatsInEconomy,
        ReservedSeatsInBusiness: ReservedSeatsInBusiness,
        ReservedSeatsInFirstClass: ReservedSeatsInFirstClass,
        Airport: Airport,
        DepartureTerminals: DepartureTerminals,
        ArrivalTerminals: ArrivalTerminals,
        From: From,
        To: To,
        TotalTicketPrice: TotalTicketPrice,
        BaggageAllowance: BaggageAllowance,
        TypeOfFlight: TypeOfFlight,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
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
              <Link className="el" to={`/profile/${userEmail}`}>
                My Profile
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/search/${userEmail}`}>
                Search
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
      <div className="main-container">
        <form>
          <div className="update">
            <div className="child">
              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Flight Number"
                    aria-label="Flight Number"
                    onChange={(event) => setFlightNumber(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Departure Time"
                    aria-label="Departure Time"
                    onChange={(event) => setDepartureTime(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Arrival Time"
                    aria-label="Arrival Time"
                    onChange={(event) => setArrivalTime(event.target.value)}
                  />
                </div>
              </div>

              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Departure Date"
                    aria-label="Departure Date"
                    onChange={(event) => setDepartureDate(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Arrival Date"
                    aria-label="Arrival Date"
                    onChange={(event) => setArrivalDate(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Duration In
            Hours"
                    aria-label="Duration In Hours"
                    onChange={(event) => setDurationInHrs(event.target.value)}
                  />
                </div>
              </div>

              <div className="row g-4 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date Of Flight"
                    aria-label="Date Of Flight"
                    onChange={(event) => setDateOfFlight(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Number Of
            Economy Seats"
                    aria-label="Number Of Economy Seats"
                    onChange={(event) =>
                      setNumberOfEconomySeats(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Number Of
            Business Seats"
                    aria-label="Number Of Business Seats"
                    onChange={(event) =>
                      setNumberOfBusinessSeats(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Number Of First
            Class Seats"
                    aria-label="Number Of First Class Seats"
                    onChange={(event) =>
                      setNumberOfFirstClassSeats(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Availiable
            Seats In Economy"
                    aria-label="Availiable Seats In Economy"
                    onChange={(event) =>
                      setAvailiableSeatsInEconomy(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Available Seats
            In Business"
                    aria-label="Available Seats In Business"
                    onChange={(event) =>
                      setAvailableSeatsInBusiness(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Available Seats
            In First Class"
                    aria-label="Available Seats In First Class"
                    onChange={(event) =>
                      setAvailableSeatsInFirstClass(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Reserved Seats
            In Economy"
                    aria-label="Reserved Seats In Economy"
                    onChange={(event) =>
                      setReservedSeatsInEconomy(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Reserved Seats
            In Business"
                    aria-label="Reserved Seats In Business"
                    onChange={(event) =>
                      setReservedSeatsInBusiness(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Reserved Seats
            In First Class"
                    aria-label="Reserved Seats In First Class"
                    onChange={(event) =>
                      setReservedSeatsInFirstClass(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Airport"
                    aria-label="Airport"
                    onChange={(event) => setAirport(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Departure
            Terminals"
                    aria-label="Departure Terminals"
                    onChange={(event) =>
                      setDepartureTerminals(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Arrival
            Terminals"
                    aria-label="Arrival Terminals"
                    onChange={(event) =>
                      setArrivalTerminals(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="row g-3 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="From"
                    aria-label="From"
                    onChange={(event) => setFrom(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="To"
                    aria-label="To"
                    onChange={(event) => setTo(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Total Ticket
            Price"
                    aria-label="Total Ticket Price"
                    onChange={(event) =>
                      setTotalTicketPrice(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="row g-2 mar">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Baggage
            Allowance"
                    aria-label="Baggage Allowance"
                    onChange={(event) =>
                      setBaggageAllowance(event.target.value)
                    }
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Of Flight"
                    aria-label="Type Of Flight"
                    onChange={(event) => setTypeOfFlight(event.target.value)}
                  />
                </div>
              </div>
              <button type="button" className="btn btn-success" onClick={sub}>
                CreateFlight
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFlight;
