/* eslint-disable react/prop-types */
import React from "react";

function SearchBar({ label, searchbarFilter, setSearchbarFilter }) {
  return (
    <div>
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="shadow-sm   block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
            value={searchbarFilter}
            onChange={(e) => setSearchbarFilter(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
