/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteAgenciesConfirm from "./DeleteAgenciesConfirm";
import UpdateAgencies from "./UpdateAgencies";
import useGetAgencies from "../../hooks/agencies/useGetAgencies";

function TableAgencies({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    agencyId: null,
    agencyCity: "",
  });
  const openModalConfirm = (agencyId, agencyCity) => {
    setConfirmModal({ show: true, agencyId, agencyCity });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    address: "",
    city: "",
  });
  const { isLoading, isError, data } = useGetAgencies();
  if (isLoading) {
    return <div>Agencies loading ...</div>;
  }
  if (isError) {
    return <div>Error during agencies loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteAgenciesConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          espaceName={confirmModal.agencyName}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateAgencies
          openUpdateSidebar={openUpdateSidebar}
          setOpenUpdateSidebar={setOpenUpdateSidebar}
        />
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CITY
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ADRESS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data
                  .filter(
                    (agency) =>
                      agency.city
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      agency.city
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((agency) => (
                    <tr key={agency.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {agency.city}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {agency.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-indigo-600 hover:text-indigo-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: agency.id,
                              city: agency.city,
                              address: agency.address,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() =>
                            openModalConfirm(agency.id, agency.city)
                          }
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableAgencies;
