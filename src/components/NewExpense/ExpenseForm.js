import React, {useState} from 'react'
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpense}) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')

    const titleChangeHadler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const dateChangeHadler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const amountChangeHadler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')

        onSaveExpense(expenseData);
    }

  return (
    <form onSubmit={submitFormHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHadler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHadler} value= {enteredAmount}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHadler} value={enteredDate}/>
        </div>
        
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add expense</button>
        </div>
    </form>
    
  )
}

export default ExpenseForm