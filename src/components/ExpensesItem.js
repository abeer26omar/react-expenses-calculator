import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpensesItem (props){
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p className="expense-item__price rounded-full">{props.amount}LE</p>
            </div>
        </div>
    );
}
export default ExpensesItem;