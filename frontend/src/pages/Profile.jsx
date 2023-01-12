import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RentalList from "../component/RentalList";

export default function Profile() {
  const navigate = useNavigate();

  const currentLocation = [
    {
      id: 1,
      véhicule: "car",
      delivery: "toulouse",
      deliveryDate: "12/03/2023",
      retourDate: "16/03/2023",
    },
    {
      id: 2,
      véhicule: "bike",
      delivery: "toulouse",
      deliveryDate: "16/03/2023",
      retourDate: "17/03/2023",
    },
  ];

  const rentalEnded = [
    {
      id: 1,
      véhicule: "car",
      delivery: "toulouse",
      deliveryDate: "11/12/2021",
      retourDate: "16/12/2021",
    },
    {
      id: 2,
      véhicule: "car",
      delivery: "toulouse",
      deliveryDate: "03/10/2022",
      retourDate: "10/10/2022",
    },
    {
      id: 3,
      véhicule: "bike",
      delivery: "toulouse",
      deliveryDate: "06/09/2022",
      retourDate: "17/10/2022",
    },
  ];

  const { setUserTokenCookie, userToken } = useContext(AuthContext);

  const handleDisconnect = () => {
    setUserTokenCookie(null);
    navigate("/");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return userToken ? (
    <div>
      <button
        type="button"
        className="flex justify-center m-auto  rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-2xl font-bold text-white p-2 mt-8"
      >
        Edit profile
      </button>
      <button
        onClick={handleDisconnect}
        type="button"
        className="flex justify-center m-auto rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-2xl font-bold text-white py-2 mt-2"
      >
        Disconnect
      </button>
      <div className="flex-justify-between text-center mt-2">
        <h1 className="m-6 uppercase font-bold">Your current rent</h1>
        {currentLocation.map((e) => (
          <RentalList
            key={e.id}
            véhicule={e.véhicule}
            delivery={e.delivery}
            deliveryDate={e.deliveryDate}
            retourDate={e.retourDelivery}
          />
        ))}
        <h1 className="mt-6 uppercase font-bold">Rental ended</h1>
        {rentalEnded.map((e) => (
          <RentalList
            key={e.id}
            véhicule={e.véhicule}
            delivery={e.delivery}
            deliveryDate={e.deliveryDate}
            retourDate={e.retourDelivery}
          />
        ))}
      </div>
    </div>
  ) : (
    useEffect(() => {
      navigateHome();
    }, [])
  );
}
