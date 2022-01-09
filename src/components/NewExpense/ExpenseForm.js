import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    let newExpenseArray = [];

    const [enteredTitle, setEnteredTitle ] = useState(" ");
    const [enteredAmount, setEnteredAmount ] = useState(" ");
    const [enteredDate, setEnteredDate ] = useState(" ");

    const enteredTitleHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
                        
    const enteredAmountHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }

    const enteredDateHandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    let NewExpenseItem = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }

    const submitHandler = ()=>{
        if(NewExpenseItem.title.length !==0 && NewExpenseItem.amount.length !==0 && NewExpenseItem.date.length !==0){
            newExpenseArray.push(NewExpenseItem)
        }else{
            alert("Please fill in the form")
        }
    }


    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange= { enteredTitleHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange= { enteredAmountHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange= { enteredDateHandler }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick= { submitHandler }>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;