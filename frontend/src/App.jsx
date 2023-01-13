import Home from "@pages/Home";
import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./admin/components/layout/Sidebar";
import HomeAdmin from "./admin/pages/HomeAdmin";
import Login from "./component/Login";
import Nav from "./component/Nav";
import Register from "./component/Register";
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
      <Nav setLoginModal={setLoginModal} loginModal={loginModal} />

      <Routes>
        {/* ROUTE CLASSIQUE */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              vehicles={vehicles}
              setVehicles={setVehicles}
              reservation={reservation}
              setReservation={setReservation}
            />
          }
        />
        <Route path="/userinfos" element={<ChangePassword />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/results"
          element={
            <SearchResults
              vehicles={vehicles}
              reservation={reservation}
              setReservation
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            />
          }
        />
        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<Sidebar />}>
          <Route index path="home" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
