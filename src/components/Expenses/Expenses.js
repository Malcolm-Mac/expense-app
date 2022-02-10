import React, { useState } from 'react';
import ExpenseList from '../Expenses/ExpenseList';
import ExpensesChart from '../Expenses/ExpensesChart';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const selectedYearHandler = (selectedYears) => {
        setSelectedYear(selectedYears)
    }

    const filteredData = props.items.filter((obj) => obj.date.getFullYear().toString() === selectedYear)

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onSelectedYear={selectedYearHandler} />
                <ExpensesChart expenses={filteredData}/>
                <ExpenseList items={filteredData} />
            </Card>
        </li>
    )
}

export default Expenses;