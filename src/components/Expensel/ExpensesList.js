import React from "react";
import ExpenselItem from "./ExpenselItem";
import "./ExpensesList.css";
// import ExpenselItem from "./ExpenselItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return;
  }
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      ) : (
        props.items.map((expen) => {
          return (
            <ExpenselItem
              key={expen.id}
              title={expen.title}
              amount={expen.amount}
              date={expen.date}
            />
          );
        })
      )}
    </ul>
  );
};

export default ExpensesList;
