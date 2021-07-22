import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.transactionAmount < 0 ? "-" : "+";
  const transactionDetails = {
    id: transaction.id,
    transactionAmount: `${transaction.transactionAmount}`,
    transactionType: `${transaction.transactionType}`,
    date: `${transaction.date}`,
    source: `${transaction.source}`,
  };

  const amount = numberWithCommas(Math.abs(transaction.transactionAmount));
  return (
    <li
      key={transaction.id}
      className={transaction.transactionAmount < 0 ? "minus" : "plus"}
    >
      <span>
        {sign}${amount}
      </span>
      <span>{transaction.transactionType}</span>
      <span>{transaction.date}</span>
      <button
        onClick={() => deleteTransaction(transactionDetails)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
