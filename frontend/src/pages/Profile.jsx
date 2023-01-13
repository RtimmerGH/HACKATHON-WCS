import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import RentalList from "../component/RentalList";
import "./Profile.css";
import ChangePassword from "../component/ChangePassword";
import Logo from "./img/compte.png";
import DetailReservation from "../component/DetailReservation";

export default function Profile() {
  const navigate = useNavigate();
  const { VITE_BACKEND_URL } = import.meta.env;
  const [changepasswordModal, setChangePasswordModal] = useState(false);
  const [reservation, setReservation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openModaldet, setOpenModaldet] = useState(false);
  const [reservationInfos, setReservationInfos] = useState("");

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
  }, [userId]);

  const handleDisconnect = () => {
    setUserTokenCookie(null);
    navigate("/");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return userToken ? (
    <div className="flex flex-col lg:flex-row gap-8 mx-10 mt-6 items-center lg:items-start">
      <ChangePassword
        changepasswordModal={changepasswordModal}
        setChangePasswordModal={setChangePasswordModal}
      />
      <div className="w-7/12 lg:w-4/12 bg-white rounded-md flex flex-col items-center h-fit py-8">
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
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center w-11/12 lg:w-8/12 bg-white rounded-md py-4 mb-8">
        <h1 className="mt-4 uppercase font-bold text-lg border-b-3">
          Your current rent
        </h1>
        <div className="flex" />
        {openModaldet && (
          <DetailReservation
            reservationInfos={reservationInfos}
            setOpenModaldet={setOpenModaldet}
          />
        )}
        {isLoading ? (
          <div>loading</div>
        ) : (
          reservation.map((e) => (
            <RentalList
              key={e.id}
              idVéhicule={e.id}
              véhicule={e.registration}
              delivery={e.startDate}
              retourDate={e.startDate}
              setOpenModaldet={setOpenModaldet}
              setReservationInfos={setReservationInfos}
            />
          ))
        )}
      </div>
    </div>
  ) : (
    useEffect(() => {
      navigateHome();
    }, [])
  );
}
