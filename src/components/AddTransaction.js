import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeExpense, setIncomeExpense] = useState("");

  const incomeButton = document.querySelector(".income");
  const expenseButton = document.querySelector(".expense");

  const expense = () => {
    setIncomeExpense("expense");
    incomeButton.classList.remove("selectedIncome");
    expenseButton.classList.add("selectedExpense");
  };

  const income = () => {
    setIncomeExpense("income");
    expenseButton.classList.remove("selectedExpense");
    incomeButton.classList.add("selectedIncome");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    function getFormattedDate(date) {
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");

      return month + "/" + day + "/" + year;
    }

    if (incomeExpense === "expense") {
      const expense = "-";

      const expenseTransaction = expense.concat(amount);

      const transaction = {
        id: Math.floor(Math.random() * 1000000000),
        transactionType: text,
        transactionAmount: expenseTransaction,
        date: getFormattedDate(date),
        source: incomeExpense,
      };

      if (text.length >= 1 && amount.length >= 1) {
        addTransaction(transaction);
      }
    } else {
      const transaction = {
        id: Math.floor(Math.random() * 1000000000),
        transactionType: text,
        transactionAmount: amount,
        date: getFormattedDate(date),
        source: incomeExpense,
      };

      if (incomeExpense.length > 1 && text.length >= 1 && amount.length >= 1) {
        addTransaction(transaction);
      }
    }
  };

  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Transaction Type</label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          id="text"
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label value={amount} htmlFor="amount">
          Amount <br />
        </label>
        <button className="expense" onClick={expense}>
          Expense
        </button>
        <button className="income" onClick={income}>
          Income
        </button>
        <input
          type="float"
          id="amount"
          placeholder="Enter amount..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <button onClick={onSubmit} className="btn">
        Add transaction
      </button>
    </div>
  );
};
