import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetailReservation({
  reservationInfos,
  setOpenModaldet,
}) {
  const [vehicleInfos, setVehicleInfos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { VITE_BACKEND_URL } = import.meta.env;

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/vehicles/${reservationInfos.idVehicule}`, {})
      .then((response) => {
        setVehicleInfos(response);
        setIsLoading(false);
      });
  }, []);

  return !isLoading ? (
    <div
      onClick={() => setOpenModaldet(false)}
      onKeyDown={() => setOpenModaldet(false)}
      tabIndex={0}
      role="button"
      className="h-screen w-screen top-0 left-0 fixed bg-[#CADEDF] overflow-y-scroll"
    >
      <img src={vehicleInfos.data.image} alt="voiture" />
      <h1 className="mt-10"> IMAT : {vehicleInfos.data.registration}</h1>
      <h1>Starting date : {reservationInfos.delivery}</h1>
      <h1>Ending date : {reservationInfos.deliveryEnd}</h1>
      <h1>km : {vehicleInfos.data.km}</h1>
      <h1>Fuel type : {vehicleInfos.data.fuel}</h1>
      <h1>Doors : {vehicleInfos.data.numDoor}</h1>
      <h1>Max passengers : {vehicleInfos.data.numPassenger}</h1>
      <h1>Color : {vehicleInfos.data.color}</h1>
      <h1>Category : {vehicleInfos.data.category}</h1>
      <h1>Type : {vehicleInfos.data.type}</h1>
      <h1>Model : {vehicleInfos.data.model}</h1>
      <h1>Agency adress : {vehicleInfos.data.address}</h1>
      <h1>Agency city : {vehicleInfos.data.city}</h1>
    </div>
  ) : (
    <h1>loading</h1>
  );
}
