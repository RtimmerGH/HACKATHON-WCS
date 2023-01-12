import React, { useState } from "react";
import TableAgencies from "../components/agencies/TableAgencies";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import SearchBar from "../components/utils/SearchBar";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreateAgencies from "../components/agencies/CreateAgencies";

function Agencies() {
  const [searchbarFilter, setSearchbarFilter] = useState("");
  const [displaySidebarCreateAgencies, setDisplaySidebarCreateAgencies] =
    useState(false);
  return (
    <div className="flex flex-col gap-4">
      {displaySidebarCreateAgencies && (
        <CreateAgencies
          displaySidebarCreateAgencies={displaySidebarCreateAgencies}
          setDisplaySidebarCreateAgencies={setDisplaySidebarCreateAgencies}
        />
      )}
      <TitlePageAdmin>Agencies</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <div>
          <button
            type="button"
            className="inline-flex gap-2 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setDisplaySidebarCreateAgencies(true)}
          >
            Add an agency
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <SearchBar
            label="Search an agency"
            searchbarFilter={searchbarFilter}
            setSearchbarFilter={setSearchbarFilter}
          />
          <TableAgencies searchbarFilter={searchbarFilter} />
        </div>
      </div>
    </div>
  );
}

export default Agencies;