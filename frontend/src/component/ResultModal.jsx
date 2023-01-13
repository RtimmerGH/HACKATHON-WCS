import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";
import Nav from "./Nav";
import userImg from "../assets/user.png";
import colorImg from "../assets/color.png";
import bootImg from "../assets/boot.png";
import { AuthContext } from "../context/AuthContext";

export default function ResultModal({ setResultModal, car, reservation }) {
  const [confirmation, setConfirmation] = useState(false);
  const [agency, setAgency] = useState(false);
  const [model, setModel] = useState(false);
  const { userToken, userId } = useContext(AuthContext);

  const body = {
    startDate: reservation.endDate,
    endDate: reservation.endDate,
    idVehicle: car.id,
    idUser: userId,
  };

  const handleClick = () => {
    if (userId !== "")
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/reservations`, body, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
  };

  useEffect(() => {
    // get agency
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/agencies/${reservation.agency}`)
      .then((response) => {
        setAgency(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
    // get model
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/models/${car.idModel}`)
      .then((response) => {
        setModel(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      w-screen
      h-screen
      z-10
      bg-[#CADEDF]
      flex-grow
      flex
      flex-col
      align-between"
    >
      <Nav />
      <div className="text-center md:w-1/2 md:m-auto">
        <h1 className="text-3xl font-bold text-center my-7">Summary</h1>
        <div className="flex-col justify-around bg-white text-cyan-500 border rounded shadow-md md:flex-row md:max-w-xl m-10">
          <div className="pt-4 text-black font-semibold">
            {agency.address} - {agency.city}
          </div>
          <div className="flex justify-center p-4 leading-normal">
            <div className="w-1/2 font-bold">
              <div>{reservation.startDate.split("T")[0]}</div>
              <div>{reservation.startDate.split("T")[1]}</div>
            </div>
            <div className="w-1/3">
              <svg
                aria-hidden="true"
                className="w-10 h-10 m-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-1/2 font-bold">
              <div>{reservation.endDate.split("T")[0]}</div>
              <div>{reservation.endDate.split("T")[1]}</div>
            </div>
          </div>
        </div>
        <div
          key={car.id}
          className="flex flex-col bg-white text-cyan-500 border rounded shadow-md md:flex-row md:min-w-1/3 mx-6"
        >
          <img
            className="object-fill w-full h-full rounded md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={car.image}
            alt={model.name}
            key={car.id}
          />
          <div className="flex flex-col justify-end p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500">
              {car.brand} {model.name}
            </h5>
            <div className="flex flex-row justify-around m-5 text-2xl">
              <div className="flex align-end">
                <img src={userImg} alt="logo user" className="h-10 w-10" />
                <p className="mx-3 font-bold text-gray-900">
                  {car.numPassenger}
                </p>
              </div>
              <div className="flex align-end">
                <img src={colorImg} alt="logo user" className="h-8 w-8" />
                <p className="mx-3 font-bold text-gray-900">{car.color}</p>
              </div>
              <div className="flex align-end">
                <img src={bootImg} alt="logo user" className="h-12 w-12" />
                <p className="mx-3 font-bold text-gray-900">{car.numDoor}</p>
              </div>
            </div>
          </div>
        </div>
        {userToken ? (
          <button
            type="button"
            onClick={() => {
              setConfirmation(true);
              handleClick();
            }}
            className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg m-5"
          >
            CONFIRM
          </button>
        ) : (
          <a
            href="/"
            className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg m-5"
          >
            Log In
          </a>
        )}
        <button
          type="button"
          onClick={() => {
            setResultModal(false);
            handleClick();
          }}
          className="text-sm font-medium text-cyan-500 dark:text-gray-300 text-center"
        >
          Back
        </button>
        {userToken && confirmation && <ConfirmModal />}
      </div>
    </div>
  );
}
