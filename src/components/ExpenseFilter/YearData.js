import Month from './Month';
import './YearData.css';

const YearData = () => {
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return (
		<div className="month">
			{
				month.map((current) => {
					return (<Month month={current} />);
				})
			}
		</div>
	)
}

export default YearData;