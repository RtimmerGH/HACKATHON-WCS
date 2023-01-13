// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// export default function HistoryView({
//   vehiculeId,
//   startingDate,
//   endingDate,
//   vehiculeImat,
//   modalHistory,
// }) {
//   if (!modalHistory) return null;
//   // const { VITE_BACKEND_URL } = import.meta.env;
//   // const {
//   //     userToken,
//   //   } = useContext(AuthContext);

//   // useEffect(() => {
//   //     axios
//   //       .get(`${VITE_BACKEND_URL}/vehicles/${idVéhicule}`, {
//   //         headers: {
//   //           Authorization: `Bearer ${userToken}`,
//   //         },
//   //       })
//   //       .then((response) => {
//   //         setReservation(response.data);
//   //         setIsLoading(false);
//   //       });
//   //   }, []);

//   return (
//     <div>
//       <h1> IMAT : {vehiculeImat}</h1>
//       <h1>Starting date : {startingDate}</h1>
//       <h1>Ending date : {endingDate}</h1>
//     </div>
//   );
// }
