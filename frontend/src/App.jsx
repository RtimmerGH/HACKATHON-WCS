/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Home from "@pages/Home";
import React, { useState } from "react";
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
import Users from "./admin/pages/Users";
import Booking from "./admin/pages/Booking";
import Agencies from "./admin/pages/Agencies";
import Vehicles from "./admin/pages/Vehicles";
import Brands from "./admin/pages/Brands";
import Models from "./admin/pages/Models";
import "./App.css";
import SearchResults from "./pages/SearchResults";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

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
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<SearchResults />} />
        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<Sidebar />}>
          <Route index path="home" element={<HomeAdmin />} />
          <Route index path="users" element={<Users />} />
          <Route index path="booking" element={<Booking />} />
          <Route index path="agencies" element={<Agencies />} />
          <Route index path="vehicles" element={<Vehicles />} />
          <Route index path="brands" element={<Brands />} />
          <Route index path="models" element={<Models />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
