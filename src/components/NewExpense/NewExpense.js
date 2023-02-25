import {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseDate from '../Expenses/ExpenseDate';

const NewExpense = (props) => {
	 const [check, setCheck] = useState(false);
	const onSaveFormHandler = (expenseData) => {
		const newExpenseData = { ...expenseData, id: Math.random().toString() }
		// console.log(newExpenseData);

		props.onAdditem(newExpenseData);
		setCheck(false);
		
	}


  const handleNewItemAddition = () => {
    setCheck(true);
	}
	
	const stopHandleNewItemAddition = () => {
		setCheck(false);
	}

	

	 let content;
  if (!check) {
    content = <button onClick={handleNewItemAddition}>Add New Expense</button>
  } else {
			content = <ExpenseForm onSaveForm={onSaveFormHandler} onCancel={stopHandleNewItemAddition} />
	
  }


	return (
		<div className="new-expense">
{content}	
		</div>
	)
}

export default NewExpense;