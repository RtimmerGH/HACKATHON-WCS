import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import SearchBar from "../components/utils/SearchBar";
import TableVehicles from "../components/vehicles/TableVehicles";
import CreateVehicle from "../components/vehicles/CreateVehicle";

function Vehicles() {
  const [searchbarFilter, setSearchbarFilter] = useState("");
  const [displaySidebarCreateVehicle, setDisplaySidebarCreateVehicle] =
    useState(false);
  return (
    <div className="flex flex-col gap-4">
      {displaySidebarCreateVehicle && (
        <CreateVehicle
          displaySidebarCreateVehicle={displaySidebarCreateVehicle}
          setDisplaySidebarCreateVehicle={setDisplaySidebarCreateVehicle}
        />
      )}
      <TitlePageAdmin>Vehicles</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <div>
          <button
            type="button"
            className="inline-flex gap-2 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setDisplaySidebarCreateVehicle(true)}
          >
            Ajouter un vehicle
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <SearchBar
            label="Search a vehicle"
            searchbarFilter={searchbarFilter}
            setSearchbarFilter={setSearchbarFilter}
          />
          <TableVehicles searchbarFilter={searchbarFilter} />
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
