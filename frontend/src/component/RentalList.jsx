import React from "react";
import "./RentalList.css";

export default function RentalList({ véhicule, delivery, retourDate }) {
  function regexDate(dateToConvert) {
    const date = dateToConvert;
    const regex = /^\d{4}-\d{2}-\d{2}/;
    const match = date.match(regex);
    const result = match ? match[0] : "";
    return result;
  }

  const deliv = regexDate(delivery);
  const delivend = regexDate(retourDate);

  return (
    <div className="rent-Content">
      <h1>Registration : {véhicule}</h1>
      <h1>Starting date : {deliv}</h1>
      <h1>Ending date : {delivend}</h1>
    </div>
  );
}
