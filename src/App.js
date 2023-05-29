import react, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import { db } from "./firebase_setup/firebase";
import { doc, getDocs, collection, addDoc } from "@firebase/firestore";

import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState([]);

  // console.log(expenses);
  useEffect(() => {
    getDocs(collection(db, "items"))
      .then((items) => {
        let total_items = [];
        console.log("in getDocs");
        items.forEach((item) => {
          console.log(item.data());
          total_items.push({
            ...item.data(),
            id: item.id,
            date: item.data().date.toDate(),
          });
        });
        console.log(total_items);
        setExpenses(total_items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const newItemhandler = (newItem) => {
    // console.log(newItem);
    addDoc(collection(db, "items"), newItem);

    console.log(newItem);
    setExpenses((prevExpenses) => {
      return [newItem, ...prevExpenses];
    });
  };

  // return react.createElement('div', {}, react.createElement('h2', {}, "Let's started"), react.createElement(Expenses, { items: expenses }));
  return (
    <div>
      <NewExpense onAdditem={newItemhandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
