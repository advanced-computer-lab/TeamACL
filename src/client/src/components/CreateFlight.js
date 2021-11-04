import {useState} from "react"
import axios from "axios"
const CreateFlight = () => {

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [flghtdate, setFlightDate] = useState()
    const [seatsavailableonflight, setSeatsAvailableOnFlight] = useState()
    console.log(flightdate)
    const sub = function (e) {
        e.preventDefault()
        axios.post("http://localhost:8000/add-flight", JSON.stringify({
            From: from,
            To : to,
            FlightDate : flightdate,
            Cabin: cabin,
            SeatsAvailableOonFlight: seatavailableonflight,          
        }), {headers:{"Content-Type" : "application/json"}})

    }

    return (<form>
    <label for="From">From:</label>
    <input type="text" id="From" name="From" onChange={(event) => setFrom(event.target.value)}/>
    <label for="To">Email:</label>
    <input type="text" id="To" name="To"  onChange={(event) => setTo(event.target.value)}/>
    <label for="FlightDate">FlightDate:</label>
    <input type="text" id="FlightDate" name="FlightDate"  onChange={(event) => setFlightDate(event.target.value)}/>
    <label for="Cabin">Cabin:</label>
    <input type="text" id="Cabin" name="Cabin"  onChange={(event) => setCabin(event.target.value)}/>
    <label for="SeatsAvailableOnFlight">SeatsAvailableOnFlight:</label>
    <input type="text" id="SeatsAvailableOnFlight" name="SeatsAvailableOnFlight"  onChange={(event) => setSeatsAvailableOnFlight(event.target.value)}/>  
    <button type="submit" value="Submit" onClick={sub} >submit </button>
  </form> )
}

export default CreateFlight 