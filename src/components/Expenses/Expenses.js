import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2018");

  const saveFilterHandler = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSaveFilter={saveFilterHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
