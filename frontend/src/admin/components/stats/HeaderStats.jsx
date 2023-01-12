import React, { useContext } from "react";
import AgenciesNumber from "./AgenciesNumber";
import BrandVehicles from "./BrandVehicles";
import UsersNumber from "./UsersNumber";
import VehiclesNumber from "./VehiclesNumber";
import { AuthContext } from "../../../context/AuthContext";

function HeaderStats() {
  const { userFirstName, userLastName, userEmail } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-4">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <AgenciesNumber />
        <VehiclesNumber />
        <UsersNumber />
      </dl>
      <div className="flex gap-8">
        <div className="bg-white rounded-md w-5/12 p-5">
          <BrandVehicles />
        </div>
        <div className="bg-white rounded-md w-7/12 p-5">
          <div className="pb-5 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My informations
            </h3>
          </div>
          <div className="mt-4">
            <p>{userFirstName}</p>
            <p>{userLastName}</p>
            <p>{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderStats;
