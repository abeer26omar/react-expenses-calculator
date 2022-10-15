import {useState} from 'react';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props){
    const [yearChanged , setyearChanged] = useState('2022');

    const selectYearHandler = (selectedYear)=>{
        setyearChanged(selectedYear);
        console.log(selectedYear);
    };
    const filteredArray = props.data.filter(expense=>{
        return expense.date.getFullYear() == yearChanged;
    });
    let expenseItemResult = <h2 className='text-center text-xl font-bold text-white p-3'>No Items Found.</h2>;
    if(filteredArray.length > 0){
        expenseItemResult = filteredArray.map((expense)=>(
            <ExpensesItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
            )
        )
    }
    return (
        <div className='wrapper'>
            <ExpensesFilter onSelectYear = {selectYearHandler}/>
            <ExpensesChart  expenses={filteredArray}/>
            {expenseItemResult}
        </div>
    );
}
export default Expenses;