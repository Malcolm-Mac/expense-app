import React, { useState } from 'react';
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const selectedYearHandler = (selectedYears) => {
        setSelectedYear(selectedYears)
    }

    const filteredData = props.items.filter((obj) => obj.date.getFullYear().toString() === selectedYear)

    let expenseContent = <h2 className="no_expense_found">No expenses found</h2>;

    if (filteredData.length > 0) {
        expenseContent = filteredData.map((expenses) => (
            <ExpenseItems
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date} />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onSelectedYear={selectedYearHandler} />
            {expenseContent}
        </Card>
    )
}

export default Expenses;