import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // console.log('yes');
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //instead of 3 different states we can define only one state
  // const [userInput, setUserInput] = useState({
  // 	enteredTitle: '',
  // 	amount: '',
  // 	date: ''
  // });s

  // event argument is bydefault available for titlechangehandler when we enter the value in the input element of form.
  const titlechangehandler = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);

    setEnteredTitle(event.target.value);
    // setUserInput({
    // 	enteredTitle: event.target.value, ...userInput
    // });

    // setUserInput((prevState) => {
    // 	// this is best way to performing state update when we depend on previous state.
    // 	return { ...prevState, enteredTitle: event.target.value };
    // })
  };

  const amountchangehandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    // 	amount: event.target.value, ...userInput
    // });
  };

  const datechangehandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    // 	date: event.target.value, ...userInput
    // });
  };

  const submitHandler = (event) => {
    // console.log('check')
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(date),
      amount: +amount,
    };
    props.onSaveForm(expenseData);

    setEnteredTitle("");
    setAmount("");
    setDate("");
    // console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            onChange={titlechangehandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={datechangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
