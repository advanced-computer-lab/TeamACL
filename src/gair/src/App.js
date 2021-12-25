import ViewAllFlights from "./components/ViewAllFlights";
import UpdateFlight from "./components/UpdateFlight";
import Home from "./components/Home";
import Error from "./components/Error";
import ViewDepartureDetails from "./components/ViewDepartureDetails";
import ViewReturnDeatails from "./components/ViewReturnDeatails";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ViewReservedFlights from "./components/ViewReservedFlights";
import UserSearch from "./components/UserSearch";
import ViewWishList from "./components/ViewWishList";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";
import ViewFlightsAdmin from "./components/ViewFlightsAdmin";
import WishListAdmin from "./components/WishListAdmin";
import ViewReservationAdmin from "./components/ViewReservationAdmin";
import CreateFlight from "./components/CreateFlight";
import AdminSearch from "./components/AdminSearch";
import AdminProfile from "./components/AdminProfile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userHome/:userEmail" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewFlights/:userEmail" element={<ViewAllFlights />} />
          <Route path="/update/:userEmail" element={<UpdateFlight />} />
          <Route
            path="/departure/:userEmail"
            element={<ViewDepartureDetails />}
          />
          <Route path="/return/:userEmail" element={<ViewReturnDeatails />} />
          <Route
            path="/reserved/:userEmail"
            element={<ViewReservedFlights />}
          />
          <Route path="/search/:userEmail" element={<UserSearch />} />
          <Route path="/wishlist/:userEmail" element={<ViewWishList />} />
          <Route path="/profile/:userEmail" element={<Profile />} />
          <Route path="/AdminHome/:userEmail" element={<AdminHome />} />
          <Route path="/viewFlights-Admin" element={<ViewFlightsAdmin />} />
          <Route path="wishlist-Admin" element={<WishListAdmin />} />
          <Route path="/reserved-Admin" element={<ViewReservationAdmin />} />
          <Route path="/create-Admin" element={<CreateFlight />} />
          <Route path="/search-Admin" element={<AdminSearch />} />
          <Route path="/profile-Admin" element={<AdminProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
