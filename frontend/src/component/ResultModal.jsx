import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import Nav from "./Nav";

export default function ResultModal({ setResultModal, car }) {
  const [confirmation, setConfirmation] = useState(false);

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
        <div className="flex bg-zinc-300 text-gray-900 border rounded shadow-md md:flex-row md:max-w-xl m-10">
          <div className="flex justify-center p-4 leading-normal">
            <div className="w-1/4">Donner les dates de début</div>
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
            <div className="w-1/4">Donner les dates de fin</div>
          </div>
        </div>
        <div className="flex bg-zinc-300 text-gray-900 border rounded shadow-md md:flex-row md:max-w-xl  m-10">
          <img
            className="object-cover w-full h-full rounded md:h-auto md:w-48 md:rounded-none md:rounded-l-lg w-1/3"
            src={car.image}
            alt={car.model}
          />
          <div className="flex flex-col justify-end p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {car.model}
            </h5>
            <p className="mb-3 font-normal text-gray-900">{car.nbrPassenger}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setConfirmation(true);
          }}
          className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg m-5"
        >
          CONFIRM
        </button>
        <button
          type="button"
          onClick={() => {
            setResultModal(false);
          }}
          className="text-sm font-medium text-cyan-500 dark:text-gray-300 text-center"
        >
          Back
        </button>
        {confirmation && <ConfirmModal />}
      </div>
    </div>
  );
}
