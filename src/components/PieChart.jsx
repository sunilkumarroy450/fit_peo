import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend, Title);

function PieChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Doughnut Chart Example",
      },
    },
  };

  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["blue", "red"],
        borderColor: ["blue", "red"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}

export default PieChart;
