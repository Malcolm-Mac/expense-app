import './ExpenseItems.css';

function ExpenseItems(props) {
    return (
        <div className='expense-item'>
            <div>{props.date.toString().split("00:00:00")[0]}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>R{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItems