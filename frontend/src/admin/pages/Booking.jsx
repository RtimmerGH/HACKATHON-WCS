import React, { useState } from "react";
import TableBooking from "../components/booking/TableBooking";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import SearchBar from "../components/utils/SearchBar";

function Booking() {
  const [searchbarFilter, setSearchbarFilter] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <TitlePageAdmin>Booking</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <SearchBar
          label="Search an booking"
          searchbarFilter={searchbarFilter}
          setSearchbarFilter={setSearchbarFilter}
        />
        <TableBooking searchbarFilter={searchbarFilter} />
      </div>
    </div>
  );
}

export default Booking;
