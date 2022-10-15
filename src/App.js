import { useState } from 'react';
import Expenses from './components/Expenses';
import AddNewExpense from './components/AddNewExpense';

import './App.css';
const initial_expenses = [
  {
    id: 1,
    title: 'break-fast',
    amount: 25,
    date: new Date(2021, 9 ,22)
  },
  {
    id: 2,
    title: 'books',
    amount: 40,
    date: new Date(2020, 5 ,23)
  },
  {
    id: 3,
    title: 'cat-food',
    amount: 50,
    date: new Date(2022, 8 ,24)
  }
  ,
  {
    id: 4,
    title: 'shower gel',
    amount: 130,
    date: new Date(2021, 4 ,24)
  }
  ,
  {
    id: 5,
    title: 'car gas',
    amount: 250,
    date: new Date(2019, 1 ,24)
  }
  ,
  {
    id: 6,
    title: 'coffee',
    amount: 70,
    date: new Date(2022, 10 ,24)
  }
  ,
  {
    id: 7,
    title: 'ring',
    amount: 300,
    date: new Date(2019, 7 ,24)
  }
  ,
  {
    id: 8,
    title: 'fish',
    amount: 100,
    date: new Date(2022, 10 ,24)
  }
]

function App() {
  const [userexpenses, setUserExpenses] = useState(initial_expenses)
  const saveExpenseHandler = (expense)=>{
    // console.log(expense);
    setUserExpenses((prevExpenses)=>{
      return [expense ,...prevExpenses]
    })
  }
  return (
    <div className='container mx-auto my-auto'>
      <h2 className="text-3xl font-bold text-center p-4">My Expenses</h2>
      <AddNewExpense onExpeseSave = {saveExpenseHandler}/>
      <Expenses data={userexpenses}/>
    </div>
  );
}

export default App;
