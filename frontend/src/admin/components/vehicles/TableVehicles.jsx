/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteVehiclesConfirm from "./DeleteVehiclesConfirm";
import UpdateVehicles from "./UpdateVehicles";
import useGetVehicles from "../../hooks/vehicles/useGetVehicles";

function TableVehicles({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    vehicleId: null,
    registration: "",
  });
  const openModalConfirm = (vehicleRegistration, vehicleId) => {
    setConfirmModal({ show: true, vehicleId, vehicleRegistration });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    registration: "",
    idCategory: "",
    idType: "",
    idModel: "",
    idAgency: "",
    km: "",
    fuel: "",
    numDoor: "",
    numPassenger: "",
    color: "",
    commissioningDate: "",
    availability: "",
    image: "",
  });
  const { isLoading, isError, data } = useGetVehicles();
  if (isLoading) {
    return <div>Vehicles loading ...</div>;
  }
  if (isError) {
    return <div>Error during vehicles loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteVehiclesConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          vehicleName={confirmModal.vehicleRegistration}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateVehicles
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
                    VEHICLE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PASSENGERS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    KM
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
                    (vehicle) =>
                      vehicle.registration
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      vehicle.registration
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((vehicle) => (
                    <tr key={vehicle.id}>
                      <td className="px-6 py-4 font-medium text-sm whitespace-nowrap">
                        {vehicle.registration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {vehicle.numPassenger}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.km}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-indigo-600 hover:text-indigo-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: vehicle.id,
                              registration: vehicle.registration,
                              idCategory: vehicle.idCategory,
                              idType: vehicle.idType,
                              idModal: vehicle.idModal,
                              idAgency: vehicle.idAgency,
                              km: vehicle.km,
                              fuel: vehicle.fuel,
                              numDoor: vehicle.numDoor,
                              numPassenger: vehicle.numPassenger,
                              color: vehicle.color,
                              commissioningDate: vehicle.commissioningDate,
                              availability: vehicle.availability,
                              image: vehicle.image,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() =>
                            openModalConfirm(vehicle.registration, vehicle.id)
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

export default TableVehicles;
