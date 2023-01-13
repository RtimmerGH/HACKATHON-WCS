import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import AgenciesNumber from "./AgenciesNumber";
import BrandVehicles from "./BrandVehicles";
import UsersNumber from "./UsersNumber";
import VehiclesNumber from "./VehiclesNumber";
import useGetBooking from "../../hooks/booking/useGetBooking";
import dateToBackend from "../utils/dateToBackend";

function HeaderStats() {
  const { isLoading, data } = useGetBooking();
  return (
    <div className="flex flex-col gap-4">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <AgenciesNumber />
        <VehiclesNumber />
        <UsersNumber />
      </dl>
      <div className="flex gap-8">
        <div className="bg-white rounded-md w-7/12 p-5 ">
          <div className="border-b border-gray-200 pb-4 flex gap-2 items-center justify-between">
            <p className="text-md font-medium">Last bookings</p>
            <Link
              to="/admin/booking"
              className="inline-flex items-center px-4 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600"
            >
              View all bookings
              <ArrowLongRightIcon
                className="ml-2 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Booking
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Registration
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Start
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            End
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {!isLoading &&
                          data
                            .filter((x, index) => index >= data.length - 5)
                            .map((person) => (
                              <tr key={person.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {person.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {person.registration}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {dateToBackend(person.startDate)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {dateToBackend(person.endDate)}
                                </td>
                              </tr>
                            ))
                            .reverse()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md w-5/12 p-5">
          <BrandVehicles />
        </div>
      </div>
    </div>
  );
}

export default HeaderStats;
