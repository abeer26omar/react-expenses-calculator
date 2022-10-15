import './AddNewExpense.css';
import ExpenseForm from './ExpenseForm';

function AddNewExpense (props){
    const newExpenseHandler = (newExpense)=>{
        const newExpenseData = {
            ...newExpense,
            id: Math.random()
        }
        props.onExpeseSave(newExpenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onAddNewExpense = {newExpenseHandler}/>
        </div>
    );
}
export default AddNewExpense;