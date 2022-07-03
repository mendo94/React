import "./ExpenseItem.scss";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 7, 2).toDateString;

  const expenseTitle = "Car Insurance";
  const expenseAmount = 238.97;
  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
};
// custom component
//date object has to be outputted as a string

export default ExpenseItem;
