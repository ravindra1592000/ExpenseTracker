import react,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';


 
const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
 
 const[expenses,setExpenses] = useState(dummy_expenses);
  console.log(expenses);


  const newItemhandler = (newItem) => {
  
    // console.log(newItem);
    setExpenses((prevExpenses) => {
      return [newItem, ...prevExpenses]
    });
  }
 
    
  // return react.createElement('div', {}, react.createElement('h2', {}, "Let's started"), react.createElement(Expenses, { items: expenses }));
    return (
      <div>
     <NewExpense onAdditem={newItemhandler} />
        <Expenses items={expenses} />
        </div>
    );
}

export default App;