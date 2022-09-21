import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 298.0, date: new Date(2022, 8, 13) },
  { id: 'e2', title: 'Toiler paper', amount: 94.12, date: new Date(2021, 11, 24) },
  { id: 'e3', title: 'New TV', amount: 799.99, date: new Date(2022, 7, 9) },
  { id: 'e4', title: 'New desk (wooden)', amount: 450, date: new Date(2022, 3, 29) },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses( prevState => [expense, ...prevState]);
  };


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
