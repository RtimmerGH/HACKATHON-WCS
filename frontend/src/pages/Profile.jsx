import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RentalList from "../component/RentalList";
import "./Profile.css";
import ChangePassword from "../component/ChangePassword";

export default function Profile() {
  const navigate = useNavigate();
  const [changepasswordModal, setChangePasswordModal] = useState(false);

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

  const {
    userFirstName,
    userLastName,
    userEmail,
    setUserTokenCookie,
    userToken,
  } = useContext(AuthContext);

  const handleDisconnect = () => {
    setUserTokenCookie(null);
    navigate("/home");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  return userToken ? (
    <div>
      <ChangePassword
        changepasswordModal={changepasswordModal}
        setChangePasswordModal={setChangePasswordModal}
      />
      <div className="MyInfos">
        <h1>{userFirstName}</h1>
        <h1>{userLastName}</h1>
        <h2>{userEmail}</h2>
        <button type="button" onClick={() => setChangePasswordModal(true)}>
          change your password
        </button>
      </div>
      <button
        type="button"
        className="flex justify-center m-auto  rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-2xl font-bold text-white p-2 mt-8 hover:bg-white"
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
