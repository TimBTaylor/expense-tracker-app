import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";
import axios from "axios";

//Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const ACTIONS = {
  DELETE_TRANSACTION: "delete_transaction",
  ADD_TRANSACTION: "add_transaction",
  GET_TRANSACTION: "get_transaction",
  ERROR_TRANSACTION: "error_transaction",
};

//Create  context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions

  async function getTransactions(id) {
    try {
      const res = await axios.get(
        `https://expensetrackerbytim.herokuapp.com/expensetracker/${id}`
      );

      dispatch({
        type: ACTIONS.GET_TRANSACTION,
        payload: res.data.transaction,
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.ERROR_TRANSACTION,
        payload: err.res,
      });
    }
  }

  async function deleteTransaction(transactionDetails) {
    const userId = localStorage.getItem("id");
    const id = transactionDetails.id;
    try {
      await axios
        .delete(
          `https://expensetrackerbytim.herokuapp.com/expensetracker/deletetransaction/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              transaction: {
                id: transactionDetails.id,
                transactionAmount: `${transactionDetails.transactionAmount}`,
                transactionType: `${transactionDetails.transactionType}`,
                date: `${transactionDetails.date}`,
                source: `${transactionDetails.source}`,
              },
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.err(err);
        });
      dispatch({
        type: ACTIONS.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.ERROR_TRANSACTION,
        payload: err.res,
      });
    }
  }

  async function addTransaction(transactionItem) {
    const userId = localStorage.getItem("id");
    try {
      await axios
        .post(
          `https://expensetrackerbytim.herokuapp.com/expensetracker/addtransaction/${userId}`,
          {
            transaction: {
              id: transactionItem.id,
              transactionAmount: transactionItem.transactionAmount,
              transactionType: transactionItem.transactionType,
              date: transactionItem.date,
              source: transactionItem.source,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      dispatch({
        type: ACTIONS.ADD_TRANSACTION,
        payload: transactionItem,
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.ERROR_TRANSACTION,
        payload: err.res,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
