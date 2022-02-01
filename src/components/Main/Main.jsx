import React from "react";
import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import List from "./List/List";
import Form from "./Form/Form";

function Main() {
  const { balance } = useContext(BudgetContext);
  const balanceColor = balance > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="flex flex-col items-center justify-center order-1 p-3 rounded-md shadow-sm sm:col-span-2 bg-slate-50 shadow-slate-800">
      <div className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
        Expense Tracker
      </div>
      <div className="text-2xl font-semibold text-slate-600">Balance</div>
      <div className={`text-3xl ${balanceColor}`}>${balance}</div>
      <List />
      <Form />
    </div>
  );
}

export default Main;
