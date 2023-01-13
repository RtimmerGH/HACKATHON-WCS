import React, { useState } from "react";
import TitlePageAdmin from "../components/layout/TitlePageAdmin";
import TableUsers from "../components/users/TableUsers";
import SearchBar from "../components/utils/SearchBar";

function Users() {
  const [searchbarFilter, setSearchbarFilter] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <TitlePageAdmin>Users</TitlePageAdmin>
      <div className="flex flex-col gap-4">
        <SearchBar
          label="Search an user"
          searchbarFilter={searchbarFilter}
          setSearchbarFilter={setSearchbarFilter}
        />
        <TableUsers searchbarFilter={searchbarFilter} />
      </div>
    </div>
  );
}

export default Users;
