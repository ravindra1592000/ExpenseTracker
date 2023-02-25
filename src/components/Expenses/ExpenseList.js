
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css';

const ExpenseList = (props) => {
  if(props.items.length === 0){
	return (<h2 className="expenses-list__fallback">found no expenses</h2>)
  }
	return (
    <ul className="expenses-list">
      {
    props.items.map(function (current) {
            return (
              <ExpenseItem
                key={current.id}
                title={current.title}
                amount={current.amount}
                date={current.date}
              />
            );
          })  
	}
		</ul>
	)

}

export default ExpenseList;