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
import Header from "./component/Header";
import Register from "./component/Register";

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
      <Header setLoginModal={setLoginModal} loginModal={loginModal} />

      <Routes>
        {/* ROUTE CLASSIQUE */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<Sidebar />}>
          <Route index path="home" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
