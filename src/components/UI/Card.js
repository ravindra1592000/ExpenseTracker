import './Card.css';


function Card(props) {
	
	const classes = 'card ' + props.className;
	// console.log(classes);
// here after card we have to give space why?
	// because we are adding two class names ,so they are separated by space.
	
	return (
		<div className={classes}>{props.children}
		</div>
	)
}

export default Card;