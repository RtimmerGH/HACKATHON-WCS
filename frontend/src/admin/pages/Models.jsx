import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TableModels from "../components/models/TableModels";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import SearchBar from "../components/utils/SearchBar";
import CreateModels from "../components/models/CreateModels";

function Models() {
  const [searchbarFilter, setSearchbarFilter] = useState("");
  const [displaySidebarCreateModels, setDisplaySidebarCreateModels] =
    useState(false);
  return (
    <div className="flex flex-col gap-4">
      {displaySidebarCreateModels && (
        <CreateModels
          displaySidebarCreateModels={displaySidebarCreateModels}
          setDisplaySidebarCreateModels={setDisplaySidebarCreateModels}
        />
      )}
      <TitlePageAdmin>Models</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <div>
          <button
            type="button"
            className="inline-flex gap-2 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setDisplaySidebarCreateModels(true)}
          >
            Ajouter un model
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <SearchBar
            label="Search an user"
            searchbarFilter={searchbarFilter}
            setSearchbarFilter={setSearchbarFilter}
          />
          <TableModels searchbarFilter={searchbarFilter} />
        </div>
      </div>
    </div>
  );
}

export default Models;
