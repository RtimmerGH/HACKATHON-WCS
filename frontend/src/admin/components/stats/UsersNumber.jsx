import React from "react";
import useGetUsers from "../../hooks/users/useGetUsers";

function UsersNumber() {
  const { isLoading, isError, data } = useGetUsers();
  if (isLoading) {
    return <div>Chargement des données ...</div>;
  }
  if (isError) {
    return <div>Erreur lors du chargement des données</div>;
  }
  return (
    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
      <dt className="text-sm font-medium text-gray-500 truncate">
        Users count
      </dt>
      <dd className="mt-1 text-3xl font-semibold text-gray-900">
        {data.length}
      </dd>
    </div>
  );
}

export default UsersNumber;
