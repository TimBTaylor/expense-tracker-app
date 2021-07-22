import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";

export const Chart = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionList = transactions.map((transaction) => {
    return transaction.transactionType;
  });

  const transactionAmount = transactions.map((transaction) => {
    return JSON.parse(Math.abs(transaction.transactionAmount));
  });
  const state = {
    labels: transactionList,
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: transactionAmount,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Transactions",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
