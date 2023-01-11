import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Sidebar from "./admin/components/layout/Sidebar";
import HomeAdmin from "./admin/pages/HomeAdmin";

function App() {
  return (
    <Router>
      <Routes>
        {/* ROUTE CLASSIQUE */}
        <Route path="/" element={<Home />} />
        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<Sidebar />}>
          <Route index path="home" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
