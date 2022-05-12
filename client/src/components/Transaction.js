import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; //context provider

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  //definig sign
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
