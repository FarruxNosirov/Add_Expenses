import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entereTitle, setEntereTitle] = useState("");
  const [entereAmount, setEntereAmount] = useState("");
  const [entereDate, setEntereDate] = useState("");

  const titleChangeHanler = (event) => {
    setEntereTitle(event.target.value);
  };
  const amountChangeHanler = (event) => {
    setEntereAmount(event.target.value);
  };
  const dateChangeHanler = (event) => {
    setEntereDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: entereTitle,
      amount: +entereAmount,
      date: new Date(entereDate),
    };
    props.onSaveExpenseDate(expenseDate);
    setEntereTitle("");
    setEntereAmount("");
    setEntereDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHanler} value={entereTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amout</label>
          <input
            type="number"
            value={entereAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHanler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={entereDate}
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHanler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCance}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
