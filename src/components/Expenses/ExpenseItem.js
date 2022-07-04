import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //react state hook for data that may change needs state to change values

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
// custom component
//date object has to be outputted as a string

export default ExpenseItem;
