import React from "react";
import useTransactions from "./../../useTransactions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-md shadow-sm bg-slate-50 shadow-slate-800">
      <div className="text-2xl font-semibold text-slate-600">{title}</div>
      <div
        className={`text-3xl ${
          title === "Income" ? "text-green-500" : "text-red-500"
        }`}
      >
        ${total}
      </div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default Details;
