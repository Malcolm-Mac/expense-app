import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

const ExpenseItems = (props) => {

    const [title,setTitle] = useState(props.title);

    const changeTitle = () =>{
        setTitle('Updated!!!!');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>R{props.amount}</div>
            </div>
            <button onClick={ changeTitle }>Change Title</button>
        </Card>
    );

}

export default ExpenseItems;