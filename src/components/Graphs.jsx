import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Graphs() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide the legend
      title: {
        display: false,
        text: "Modular Bar Chart",
      },
    },
  };

  const data = {
    labels: [
      5, 9, 11, 12, 15, 17, 19, 24, 8, 13, 14, 17, 11, 22, 15, 10, 9, 5, 4, 3,
      2, 6, 3, 5, 9, 11, 12, 15, 17, 19, 24, 8, 13, 14, 17, 11, 22, 15, 10,
    ],
    datasets: [
      {
        data: [
          5, 9, 11, 12, 15, 17, 19, 24, 8, 13, 14, 17, 11, 22, 15, 10, 9, 5, 4,
          3, 2, 6, 3, 5, 9, 11, 12, 15, 17, 19, 24, 8, 13, 14, 17, 11, 22, 15,
        ],
        backgroundColor: "blue",
        borderRadius: 20, // Set the radius for rounded corners
        borderSkipped: false, // Ensure all corners are rounded
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default Graphs;
