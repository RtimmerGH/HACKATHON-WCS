import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreateBrands from "../components/brands/CreateBrands";
import TableBrands from "../components/brands/TableBrands";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import SearchBar from "../components/utils/SearchBar";

function Brands() {
  const [searchbarFilter, setSearchbarFilter] = useState("");
  const [displaySidebarCreateBrands, setDisplaySidebarCreateBrands] =
    useState(false);
  return (
    <div className="flex flex-col gap-4">
      {displaySidebarCreateBrands && (
        <CreateBrands
          displaySidebarCreateBrands={displaySidebarCreateBrands}
          setDisplaySidebarCreateBrands={setDisplaySidebarCreateBrands}
        />
      )}
      <TitlePageAdmin>Brands</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <div>
          <button
            type="button"
            className="inline-flex gap-2 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setDisplaySidebarCreateBrands(true)}
          >
            Ajouter un brand
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <SearchBar
            label="Search a brand"
            searchbarFilter={searchbarFilter}
            setSearchbarFilter={setSearchbarFilter}
          />
          <TableBrands searchbarFilter={searchbarFilter} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
