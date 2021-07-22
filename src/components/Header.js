import React from "react";

export const Header = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <h2>{username}'s Expense Tracker</h2>
    </div>
  );
};
