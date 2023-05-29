import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    // console.log("selectedYear :" );
    // console.log(selectedYear);
    // filtered = true;
    console.log("filter changeHandler will run");
    setFilteredYear(() => {
      return selectedYear;
    });
  };

  const FilterYearItems = props.items.filter((current) => {
    // console.log("in expenses");
    // console.log(current.date);
    console.log("filter year items will run");
    console.log(current.date.getFullYear().toString());
    return current.date.getFullYear().toString() === filteredYear;
  });
  console.log(FilterYearItems);

  // this way we can prefer the conditional rendering because this way jsx code is clean.

  // let expenseItems;
  // if (FilterYear.length === 0) {
  //   expenseItems = <p>no item found</p>
  // }

  // if (FilterYear.length > 0) {
  //   expenseItems = FilterYear.map(function (current) {
  //           return (
  //             <ExpenseItem
  //               key={current.id}
  //               title={current.title}
  //               amount={current.amount}
  //               date={current.date}
  //             />
  //           );
  //         })
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {
          //  (FilterYear.length === 0 ? <p>no item found</p> : ( FilterYear.map(function (current) {
          //       return (
          //         <ExpenseItem
          //           key={current.id}
          //           title={current.title}
          //           amount={current.amount}
          //           date={current.date}
          //         />
          //       );
          //     })    ))
          // expenseItems
        }
        <ExpensesChart expenses={FilterYearItems} />
        <ExpenseList items={FilterYearItems} />
      </Card>
    </div>
  );
}

export default Expenses;
