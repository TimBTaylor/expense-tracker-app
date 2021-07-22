import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) =>
    JSON.parse(transaction.transactionAmount)
  );
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const updatedExpense = expense.substring(1);

  const expenseAmount = expense < 0 ? updatedExpense : expense;

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${numberWithCommas(expenseAmount)}</p>
        </div>
      </div>
    </div>
  );
};
