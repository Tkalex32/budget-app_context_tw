import React from "react";
import { useContext } from "react";
import { BudgetContext } from "../../../context/BudgetContext";
import { MdAttachMoney } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const List = () => {
  const { state } = useContext(BudgetContext);

  return (
    <div className="flex flex-col w-full pt-3 mt-3 text-lg border-t sm:w-8/12 sm:max-w-2xl">
      {state.map((i) => (
        <div key={i.id}>
          <div className="flex justify-between border-b">
            <div className="flex items-center w-full">
              <MdAttachMoney
                className={`w-6 h-6 ${
                  i.type === "Income" ? "bg-green-500" : "bg-red-500"
                } text-white rounded-full`}
              />
              <span className="w-2/12 mr-2 text-right">${i.amount}</span>
              <span className="w-3/12 mr-2">{i.category}</span>
              <span className="">{i.date}</span>
            </div>
            <div>
              <AiFillDelete className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
