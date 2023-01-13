import React from "react";
import "./RentalList.css";

export default function RentalList({
  idVéhicule,
  véhicule,
  delivery,
  retourDate,
  setOpenModaldet,
  setReservationInfos,
}) {
  function regexDate(dateToConvert) {
    const date = dateToConvert;
    const regex = /^\d{4}-\d{2}-\d{2}/;
    const match = date.match(regex);
    const result = match ? match[0] : "";
    return result;
  }

  const deliv = regexDate(delivery);
  const delivend = regexDate(retourDate);

  function handleClick() {
    setOpenModaldet(true);
    const infos = {
      idVehicule: idVéhicule,
      delivery: deliv,
      deliveryEnd: delivend,
    };

    setReservationInfos(infos);
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      className="rent-Content"
    >
      <h1> IMAT : {véhicule}</h1>
      <h1>Starting date : {deliv}</h1>
      <h1>Ending date : {delivend}</h1>
    </div>
  );
}
