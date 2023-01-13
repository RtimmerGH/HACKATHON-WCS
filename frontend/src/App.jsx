/* eslint-disable import/no-unresolved */
import Home from "@pages/Home";
import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./admin/components/layout/Sidebar";
import HomeAdmin from "./admin/pages/HomeAdmin";
import Login from "./component/Login";
import Nav from "./component/Nav";
import Register from "./component/Register";
import Users from "./admin/pages/Users";
import Booking from "./admin/pages/Booking";
import Agencies from "./admin/pages/Agencies";
import Vehicles from "./admin/pages/Vehicles";
import Brands from "./admin/pages/Brands";
import Models from "./admin/pages/Models";
import "./App.css";
import SearchResults from "./pages/SearchResults";
import Profile from "./pages/Profile";
import { AuthContext } from "./context/AuthContext";
import ChangePassword from "./component/ChangePassword";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [reservation, setReservation] = useState();

  const { VITE_BACKEND_URL } = import.meta.env;
  const {
    setUserFirstName,
    setUserLastName,
    setUserEmail,
    setUserRole,
    setUserId,
  } = useContext(AuthContext);

  useEffect(() => {
    const token = Cookies.get("userToken");

    if (token) {
      axios
        .get(`${VITE_BACKEND_URL}/reconnect`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserFirstName(response.data.firstname);
          setUserLastName(response.data.lastname);
          setUserEmail(response.data.email);
          setUserRole(response.data.admin);
          setUserId(response.data.id);
        });
    }
  }, []);

  return (
    <Router>
      <Login
        loginModal={loginModal}
        setLoginModal={setLoginModal}
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />
      <Register
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />

      <Routes>
        {/* ROUTE CLASSIQUE */}
        <Route
          path="/"
          element={
            <Nav setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        >
          <Route
            path=""
            element={
              <Home
                vehicles={vehicles}
                setVehicles={setVehicles}
                reservation={reservation}
                setReservation={setReservation}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/results"
            element={
              <SearchResults
                vehicles={vehicles}
                reservation={reservation}
                setReservation
              />
            }
          />
          <Route path="/userinfos" element={<ChangePassword />} />
        </Route>
        =======
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/results"
          element={
            <SearchResults
              vehicles={vehicles}
              reservation={reservation}
              setReservation
            />
          }
        />
        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<Sidebar />}>
          <Route path="" element={<HomeAdmin />} />
          <Route path="users" element={<Users />} />
          <Route path="booking" element={<Booking />} />
          <Route path="agencies" element={<Agencies />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="brands" element={<Brands />} />
          <Route path="models" element={<Models />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
