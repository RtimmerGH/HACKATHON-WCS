import Home from "@pages/Home";
import Sidebar from "./admin/components/layout/Sidebar";
import HomeAdmin from "./admin/pages/HomeAdmin";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./admin/pages/Users";
import Booking from "./admin/pages/Booking";
import Agencies from "./admin/pages/Agencies";
import Vehicles from "./admin/pages/Vehicles";
import Brands from "./admin/pages/Brands";
import Models from "./admin/pages/Models";

function App() {
  return (
    <Router>
      <Routes>
        {/* ROUTE CLASSIQUE */}
        <Route path="/" element={<Home />} />
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
