import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import RentalList from "../component/RentalList";
import "./Profile.css";
import ChangePassword from "../component/ChangePassword";
import Logo from "./img/compte.png";

export default function Profile() {
  const navigate = useNavigate();
  const { VITE_BACKEND_URL } = import.meta.env;
  const [changepasswordModal, setChangePasswordModal] = useState(false);
  const [reservation, setReservation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const {
    userFirstName,
    userLastName,
    userEmail,
    setUserTokenCookie,
    userToken,
    userId,
  } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/reservations?user=${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setReservation(response.data);
        setIsLoading(false);
      });
  }, []);

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
        <img src={Logo} className="Logo" alt="Logo" />
        <div className="Names">
          <h1>{userFirstName}</h1>
          <h1>{userLastName}</h1>
        </div>
        <h2>{userEmail}</h2>
        <div className="HoverButton">
          <button
            type="button"
            onClick={() => setChangePasswordModal(true)}
            className="flex justify-center m-auto rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-l font-bold text-white py-2 mt-4 active:opacity-50"
          >
            Change your password
          </button>
          <button
            onClick={handleDisconnect}
            type="button"
            className="flex justify-center m-auto rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-l font-bold text-white py-2 mt-2"
          >
            Disconnect
          </button>
        </div>
      </div>
      <div className="flex-justify-between text-center mt-2">
        <h1 className="m-6 uppercase font-bold border-b-3">
          Your current rent
        </h1>
        <div className="flex" />
        {isLoading ? (
          <div>chargement</div>
        ) : (
          reservation.map((e) => (
            <RentalList
              key={e.id}
              véhicule={e.registration}
              delivery={e.startDate}
              deliveryDate={e.registration}
              retourDate={e.startDate}
            />
          ))
        )}
      </div>
      {/* <button
        type="button"
        className="flex justify-center m-auto  rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-2xl font-bold text-white p-2 mt-4"
      >
        Edit profile
      </button> */}
    </div>
  ) : (
    useEffect(() => {
      navigateHome();
    }, [])
  );
}
