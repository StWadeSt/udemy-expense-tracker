import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css';

const NewExpense = ({onAddExpense}) => {

  const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        onAddExpense(expenseData);
        setIsEditing(false)
    }

    function startEditingHnadler(){
        setIsEditing(true)
    }
    function stopEditingHandler(){
      setIsEditing(false)
    }

  return (
    <div className='new-expense'>
      {!isEditing && <button type='button' onClick={startEditingHnadler}>Add expense</button> }
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpense