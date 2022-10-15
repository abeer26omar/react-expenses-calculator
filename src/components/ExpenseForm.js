import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [titleValue , setTitleValue] = useState('');
    const [amountValue , setAmountValue] = useState('');
    const [dateValue , setdateValue] = useState('');
    const [addExpense, setaddExpense] = useState(false)

    const titleHandler = (event)=>{
        setTitleValue(event.target.value);
    }
    const amountHandler = (event)=>{
        setAmountValue(event.target.value);
    }
    const dateHandler = (event)=>{
        setdateValue(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: titleValue,
            amount: amountValue,
            date: new Date(dateValue)
        }
        setaddExpense(false);
        // console.log(expenseData);
        props.onAddNewExpense(expenseData);
    }
    let showFormHandler = ()=>{
        if(addExpense){
            setaddExpense(false)
        }else{
            setaddExpense(true);
        }
    }
    if(addExpense){
    return (
            <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={showFormHandler}>cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
     )
    }else{
      return (<button onClick={showFormHandler}>Add New Expense</button>)  
    }
}
export default ExpenseForm;