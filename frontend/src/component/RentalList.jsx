import React from "react";
import "./RentalList.css";

export default function RentalList({
  véhicule,
  delivery,
  deliveryDate,
  retourDate,
}) {
  return (
    <div className="rent-Content">
      <h1>{véhicule}</h1>
      <h1>{delivery}</h1>
      <h1>{deliveryDate}</h1>
      <h1>{retourDate}</h1>
    </div>
  );
}
