import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensChart from "./ExpensChart";

const Expenses = (props) => {
  const [filterYear, setFilterYaer] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYaer(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onchangeFilter={filterChangeHandler}
        />
        <ExpensChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
