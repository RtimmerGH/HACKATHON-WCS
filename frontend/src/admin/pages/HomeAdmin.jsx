import React from "react";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import HeaderStats from "../components/stats/HeaderStats";

function HomeAdmin() {
  return (
    <div>
      <TitlePageAdmin>Dashboard</TitlePageAdmin>
      <div>
        <HeaderStats />
      </div>
    </div>
  );
}

export default HomeAdmin;
