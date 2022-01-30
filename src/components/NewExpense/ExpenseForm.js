import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */


    const enteredTitleHandler = (e) => {
        setTitle(e.target.value)
        /* setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value }
        }) */
    }

    const enteredAmountHandler = (e) => {
        setAmount(e.target.value)
        /* setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value }
        }) */
    }

    const enteredDateHandler = (e) => {
        setDate(e.target.value)
        /* setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value }
        }) */
    }



    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        if (expenseData.title.length !== 0 &&
            expenseData.amount.length !== 0 &&
            expenseData.date.length !== 0) {

            props.onSaveExpenseData(expenseData)

            setTitle('');
            setAmount('');
            setDate('');

        } else {
            alert("no input");
        }

    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={enteredTitleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={enteredAmountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={enteredDateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;