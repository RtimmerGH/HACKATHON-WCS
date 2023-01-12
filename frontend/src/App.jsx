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

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { VITE_BACKEND_URL } = import.meta.env;
  const {
    setUserFirstName,
    setUserLastName,
    setUserEmail,
    userRole,
    setUserRole,
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
        });
    }
  }, []);

  const protectedLevel3 = () => {
    if (userRole === 3) {
      return true;
    }
    if (userRole === 2) {
      return true;
    }
    if (userRole === 1) {
      return true;
    }
    return false;
  };

  const protectedLevel1 = () => {
    if (userRole === 3) {
      return true;
    }
    return false;
  };

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
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* ROUTE User */}
        <Route
          path="/profile"
          element={
            protectedLevel3() ? <Profile /> : <Navigate replace to="/home" />
          }
        />
        <Route
          path="/results"
          element={
            protectedLevel3() ? (
              <SearchResults />
            ) : (
              <Navigate replace to="/home" />
            )
          }
        />
        {/* ROUTE ADMIN */}
        <Route
          path="/admin"
          element={
            protectedLevel1() ? <Sidebar /> : <Navigate replace to="/home" />
          }
        >
          <Route index path="home" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
