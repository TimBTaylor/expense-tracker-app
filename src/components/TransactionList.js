import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import Select from "react-select";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const listLength = transactions.length;

  useEffect(() => {
    const id = localStorage.getItem("id");
    getTransactions(id);
    // eslint-disable-next-line
  }, []);

  const months = [
    {
      value: "01",
      label: "January",
    },
    {
      value: "02",
      label: "February",
    },
    {
      value: "03",
      label: "March",
    },
    {
      value: "04",
      label: "April",
    },
    {
      value: "05",
      label: "May",
    },
    {
      value: "06",
      label: "June",
    },
    {
      value: "07",
      label: "July",
    },
    {
      value: "08",
      label: "August",
    },
    {
      value: "09",
      label: "September",
    },
    {
      value: "10",
      label: "October",
    },
    {
      value: "11",
      label: "November",
    },
    {
      value: "12",
      label: "December",
    },
  ];

  return (
    <>
      {listLength >= 6 ? (
        <div>
          <h3>Transactions</h3>
          <input
            type="text"
            placeholder="Search by transaction"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Select
            onChange={(obj) => {
              setSelectedValue(obj);
              setMonth(obj.value);
            }}
            value={selectedValue}
            options={months}
            placeholder="Search by month"
          />
          <ul className="more">
            {transactions
              .filter((transaction) => {
                if (search === "") {
                  return transaction;
                } else if (
                  transaction.transactionType
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return transaction;
                }
              })
              .filter((transaction) => {
                if (month === "") {
                  return transaction;
                } else if (transaction.date.substring(0, 2) === month) {
                  return transaction;
                }
              })
              .slice(0)
              .reverse()
              .map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Transactions</h3>
          <input
            type="text"
            placeholder="Search by transaction"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Select
            onChange={(obj) => {
              setSelectedValue(obj);
              setMonth(obj.value);
            }}
            value={selectedValue}
            options={months}
            placeholder="Search by month"
          />
          <ul className="less">
            {transactions
              .filter((transaction) => {
                if (search === "") {
                  return transaction;
                } else if (
                  transaction.transactionType
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return transaction;
                }
              })
              .filter((transaction) => {
                if (month === "") {
                  return transaction;
                } else if (transaction.date.substring(0, 2) === month) {
                  return transaction;
                }
              })
              .slice(0)
              .reverse()
              .map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
