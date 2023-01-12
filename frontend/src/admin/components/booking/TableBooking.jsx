/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import DeleteBookingConfirm from "./DeleteBookingConfirm";
import useGetBooking from "../../hooks/booking/useGetBooking";
import UpdateKmBooking from "./UpdateKmBooking";

function TableBooking({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    bookingId: null,
  });
  const openModalConfirm = (bookingId) => {
    setConfirmModal({ show: true, bookingId });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    km: "",
  });
  const { isLoading, isError, data } = useGetBooking();
  if (isLoading) {
    return <div>Booking loading ...</div>;
  }
  if (isError) {
    return <div>Error during booking loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteBookingConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          bookingId={confirmModal.bookingId}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateKmBooking
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
                    VEHICULE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    USER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    START DATE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    END DATE
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
                    (booking) =>
                      booking.idUser
                        .toString()
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      booking.idUser
                        .toString()
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.idVehicle}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.idUser}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-indigo-600 hover:text-indigo-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: model.id,
                              name: model.name,
                              idBrand: model.idBrand,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() => openModalConfirm(booking.id)}
                        />
                        <ArrowRightOnRectangleIcon
                          className="text-green-600 w-6 h-6 hover:text-green-900 cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: booking.id,
                              km: booking.km,
                            })
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

export default TableBooking;
