import React from "react";
import SearchForm from "../component/SearchForm";

function Home({ vehicles, setVehicles, reservation, setReservation }) {
  return (
    <div className="bg-img">
      <SearchForm
        vehicles={vehicles}
        setVehicles={setVehicles}
        reservation={reservation}
        setReservation={setReservation}
      />
    </div>
  );
}

export default Home;
