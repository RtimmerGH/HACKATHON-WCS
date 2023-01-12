import React from "react";
import SearchForm from "../component/SearchForm";

function Home({ vehicles, setVehicles, reservation, setReservation }) {
  return (
    <SearchForm
      vehicles={vehicles}
      setVehicles={setVehicles}
      reservation={reservation}
      setReservation={setReservation}
    />
  );
}

export default Home;
