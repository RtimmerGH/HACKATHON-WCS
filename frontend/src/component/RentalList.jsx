import React from "react";

export default function RentalList({
  véhicule,
  delivery,
  deliveryDate,
  retourDate,
}) {
  return (
    <div className="flex justify-around">
      <h1>{véhicule}</h1>
      <h1>{delivery}</h1>
      <h1>{deliveryDate}</h1>
      <h1>{retourDate}</h1>
    </div>
  );
}
