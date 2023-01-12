/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteBrandsConfirm from "./DeleteBrandsConfirm";
import UpdateBrands from "./UpdateBrands";
import useGetBrands from "../../hooks/brands/useGetBrands";

function TableBrands({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    brandId: null,
    brandName: "",
  });
  const openModalConfirm = (brandId, brandName) => {
    setConfirmModal({ show: true, brandId, brandName });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    name: "",
  });
  const { isLoading, isError, data } = useGetBrands();
  if (isLoading) {
    return <div>Brands loading ...</div>;
  }
  if (isError) {
    return <div>Error during brands loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteBrandsConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          espaceName={confirmModal.brandName}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateBrands
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
                    NAME
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
                    (brand) =>
                      brand.name
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      brand.name
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((brand) => (
                    <tr key={brand.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {brand.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-emerald-600 hover:text-emerald-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: brand.id,
                              name: brand.name,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() => openModalConfirm(brand.id, brand.name)}
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

export default TableBrands;
