import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
};
// custom component
//date object has to be outputted as a string

export default ExpenseItem;
