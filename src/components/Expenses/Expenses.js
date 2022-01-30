import React,{useState} from 'react';
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const selectedYearHandler = (selectedYears) => {
        setSelectedYear(selectedYears)
        console.log(selectedYears)
    }

    return (
        <div>
            <ExpensesFilter selected={selectedYear}  onSelectedYear={selectedYearHandler} />
            <Card className="expenses">
                <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItems>
                <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItems>
                <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItems>
                <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems>
            </Card>
        </div>
    )
}

export default Expenses;