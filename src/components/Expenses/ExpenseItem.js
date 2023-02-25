import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import { useState } from "react";

function ExpenseItem(props) {
  console.log(props.title);
  const [title, setTitle] = useState(props.title);
  // // console.log('ravindra');
  // // let title = props.title;
  // const clickhandler = () => {
  //   // title = 'Updated!';
  //   setTitle('updated!');
  //   console.log(title);
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <div className="expense-item__price">${props.amount}</div>
          <h2>{title}</h2>
          {/* <button onClick={clickhandler}>change title</button>	 */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
