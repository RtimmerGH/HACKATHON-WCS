/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */

let i = 0;
const colors = ["#E6F69D", "#AADEA7", "#64C2A6", "#2D87BB"];

function getColor() {
  return colors[i++ % colors.length];
}

export default function convertToPieFormat(vehicles) {
  const labels = [];
  const data = [];
  const brandCount = {};
  const colors = [];

  vehicles.forEach((vehicle) => {
    if (!labels.includes(vehicle.brand)) {
      labels.push(vehicle.brand);
      brandCount[vehicle.brand] = 1;
      colors.push(getColor());
    } else {
      brandCount[vehicle.brand]++;
    }
  });

  labels.forEach((label) => {
    data.push(brandCount[label]);
  });

  return {
    labels,
    datasets: [
      {
        label: "# of vehicles",
        data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
}
