import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'

import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from '../Expenses/ExpensesChart'


const Expenses = ({expenses}) => {

  const [newYear, setNewYear] = useState('2020')

  const newYearSelected = (year) => {
    setNewYear(year);
    console.log(year);
  }

  const filteredExpenses = expenses.filter((expense) =>{
    return expense.date.getFullYear().toString() === newYear;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onYearChange={newYearSelected} defaultYear={newYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses = {filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses