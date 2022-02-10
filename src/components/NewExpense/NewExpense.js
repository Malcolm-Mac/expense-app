import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditting, setIsEditting ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditting(false)
    }

    const isEdittingHandler = () => {
        setIsEditting(true)
    }

    const cnacelEdittingHandler = () => {
        setIsEditting(false)
    }
    
    return (
        <div className="new-expense">
            {!isEditting && <button type="button" onClick={isEdittingHandler}>Add New Expense</button>}
            {isEditting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cnacelEdittingHandler} />}
        </div>
    );
}

export default NewExpense;